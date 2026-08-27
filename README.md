# Law Firm — Advocate Frontend Website

This repository contains the frontend for a law firm / advocate website built with React, TypeScript, and Vite.

Features
- Minimal, responsive UI for showcasing advocates and practice areas
- Contact and booking UI components
- Light/dark theme support via context

Tech stack
- React + TypeScript
- Vite (dev server & build)
- ESLint + TypeScript configs

Quickstart

Prerequisites
- Node.js 16+ (recommended 18+)

Install

```bash
npm install
```

Run dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
npm run preview
```

Available scripts
- `dev` — start Vite dev server
- `build` — build production bundle
- `preview` — locally preview the production build

Project structure (top-level)
- `src/` — application source code
- `public/` — static assets
- `vite.config.ts`, `tsconfig.json`, `package.json` — project config

Deployment

You can deploy the built `dist/` output to any static host (Vercel, Netlify, GitHub Pages, etc.). For Vercel, connect the repository and set the build command to `npm run build` and the output directory to `dist`.

Contributing

Feel free to open issues or PRs. For local development, follow the Quickstart steps above.

Author
- Project maintained by the repository owner.

License
- See the repository license or add one if required.

---

If you'd like, I can add a demo screenshot, badges, or CI pipeline next.  
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
