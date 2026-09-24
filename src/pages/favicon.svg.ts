import type { APIRoute } from 'astro';
import { logos, logoVariant } from '../lib/logo';

export const GET: APIRoute = () =>
  new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0a0a0a"/>${logos[logoVariant].mark('#fff')}</svg>`,
    { headers: { 'Content-Type': 'image/svg+xml' } },
  );
