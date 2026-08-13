# Samuel Sendzul

Personal CV site: a product-focused software engineer homepage with light/dark
theme and a client-generated PDF download.

## Why a website, not only a PDF

I built this as a live site instead of only a static PDF for a few reasons:

- **Faster iteration.** I can edit in a modern coding editor instead of a PDF
  editor or design tool.
- **Version history.** Git keeps every previous version, so I can always go
  back to an earlier site.
- **Always up to date.** Even if I shared the link months ago, a recruiter who
  reopens it still sees the latest version.
- **Easy feedback.** Anyone can open the site anywhere, anytime. I do not have
  to send a PDF first.
- **Discoverable.** The page can be indexed by Google, so searches for me are
  richer.
- **Better experience.** Viewer preferences are respected (light/dark theme,
  font size and accessibility). The page can also be translated instantly with
  Google Translate if English is not preferred.

A PDF download is still available for ATS systems and offline sharing.

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
