# AGENTS.md

Agent-facing brief for the Samuel Sendzul CV site.

## Project overview

Single-page React + Vite site. The home page is a redesigned CV for a product
focused software engineer: intro, selected work, experience, tool stack,
education. Light/dark theme. Client-side PDF download via `@react-pdf/renderer`.

No router. No Tailwind. No UI library. No path aliases.

## Stack

| Piece    | Choice                                  |
| -------- | --------------------------------------- |
| UI       | React 19                                |
| Build    | Vite 8                                  |
| Language | TypeScript                              |
| Styles   | CSS Modules + tokens in `src/index.css` |
| PDF      | `@react-pdf/renderer` (lazy-loaded)     |
| Lint     | oxlint                                  |

Explicit non-choices: Tailwind, UI kits, `react-router`, path aliases (`@/`).

## Layout

```
src/
  App.tsx / App.module.css     page composition + responsive grid
  index.css                    tokens, resets, base type, print
  context/ThemeContext.tsx     theme override + system preference
  data/cv.ts                   typed content (single source of truth)
  components/
    layout/                    Header, Footer
    cv/                        Intro, SelectedWork, RoleCard, ToolStack, Education
    ui/                        Section, ThemeToggle, DownloadCvButton
  pdf/CvDocument.tsx           A4 print layout for download
```

## Code style

- One colocated CSS Module per component (`Foo.tsx` + `Foo.module.css`).
- Design tokens only in `src/index.css`. Modules reference `var(--...)`, never
  raw hex.
- All content lives in `src/data/cv.ts`. Web and PDF read from the same object.
- Writing voice: first person, plain and direct, short sentences, concrete
  numbers. No marketing adjectives. No em dashes.
- Match existing patterns. Keep changes surgical.

## Where to look

| Task                                  | Start here                                                      |
| ------------------------------------- | --------------------------------------------------------------- |
| Add or edit a role / highlight / tool | `src/data/cv.ts`                                                |
| Change colours, type, spacing         | `src/index.css`                                                 |
| Change theme behaviour                | `src/context/ThemeContext.tsx`, no-flash script in `index.html` |
| Change page layout / breakpoints      | `src/App.module.css`                                            |
| Change PDF layout                     | `src/pdf/CvDocument.tsx`                                        |
| Change download UX                    | `src/components/ui/DownloadCvButton.tsx`                        |

## Commands

```bash
pnpm install
pnpm dev      # Vite dev server
pnpm build    # tsc -b && vite build
pnpm lint     # oxlint
```

## Verify before finishing

- `pnpm lint` and `pnpm build` clean
- Theme toggle persists across reload; first visit follows system preference
- Check ~375px, ~768px, ~1280px widths
- Download CV: selectable text, fits one to two A4 pages
