// Renders the built /cv page to a PDF with headless Chrome.
// Runs after `astro build`; writes dist/<file> and a gitignored copy in public/ for `astro dev`.
import { createServer } from 'node:http';
import { copyFile, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join } from 'node:path';
import puppeteer from 'puppeteer-core';

const FILE = 'Leni-Duderija-CV.pdf';
const DIST = new URL('../dist/', import.meta.url).pathname;
const PUBLIC = new URL('../public/', import.meta.url).pathname;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

const chromePath = () => {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error('Chrome not found. Set CHROME_PATH.');
  return found;
};

// Minimal static server so absolute asset paths (/_astro/...) resolve.
const server = createServer(async (req, res) => {
  let path = join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try {
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const { port } = server.address();

const browser = await puppeteer.launch({ executablePath: chromePath(), headless: true, args: ['--no-sandbox'] });
try {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}/cv/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: join(DIST, FILE), preferCSSPageSize: true });
  console.log(`CV PDF: dist/${FILE}`);
  await copyFile(join(DIST, FILE), join(PUBLIC, FILE));
} finally {
  await browser.close();
  server.close();
}
