# Mahmoud Ali, portfolio

Personal site of Mahmoud Ali, frontend-focused MERN developer. Live at
**https://mahmoud-abo-al-ela.github.io/mahmoud-ali/**

Built with Next.js 16 (App Router, static export), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

- All copy and project data live in `src/content/site.ts`.
- Project screenshots are pre-compressed WebP in `src/assets/projects/`. GitHub Pages has no image optimizer, so keep new ones small.
- Dark theme by default, light theme via the toggle or the system setting. The choice is applied before first paint.
- Every push to `main` deploys through `.github/workflows/pages.yml`. The workflow sets `PAGES_BASE_PATH` to `/<repo>` and `SITE_URL` for the share-card metadata; locally both are empty and the site runs at `/`.
