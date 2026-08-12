# Samuel Sendzul

Personal CV site: a product-focused software engineer homepage with light/dark
theme and a client-generated PDF download.

## Stack

- React 19 + Vite 8 + TypeScript
- CSS Modules (one per component)
- `@react-pdf/renderer` for selectable PDF generation
- oxlint

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Content

All copy lives in [`src/data/cv.ts`](src/data/cv.ts). The web page and PDF both
render from that module. Edit there, not in components.

## Theme

Theme preference is stored in `localStorage` under `sendzul-theme`. On first
visit the site follows `prefers-color-scheme`. Toggle is in the header.
