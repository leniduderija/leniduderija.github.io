# leniduderija.github.io

Personal portfolio built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve dist/
```

## Editing content

- `src/data/profile.ts` — name, role, intro, contact links
- `src/data/experience.ts` — CV timeline (newest first)
- `src/data/skills.ts` — technologies by group
- `public/Leni-Duderija-CV.pdf` — downloadable CV
- `/cv` — printable CV generated from the same data (Print → Save as PDF)

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`
(Settings → Pages → Source: GitHub Actions).
