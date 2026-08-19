# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint
npm run preview   # preview production build locally
```

No test suite is configured.

## Architecture

This is a **personal portfolio website** for Petr Mikeska, built as a single-page React app.

### Data flow

All content (text, experience, skills, etc.) lives in **`src/data/content.ts`** (CZ) and **`src/data/content.en.ts`** (EN) as typed exported arrays. No API calls, no state management. To change any displayed content, edit `content.ts` — and keep the EN file in step.

Content is read through `useContent()` (`src/hooks/use-content.ts`), which returns the whole `content.ts` or `content.en.ts` namespace for the active language. Import from `@/data/content` directly only for the language-neutral objects: `contact`, `footer`, and the identity fields of `hero` (`name`, `coordinates`, `photo`, `cvUrl`, links). `hero`'s three prose fields — `tagline`, `subtagline`, `intro` — **are** translated in `content.en.ts` and must come from the hook.

### Three design systems

The repository carries three complete designs over the same data layer. `App.tsx` picks one with a single import.

| | v3 — **shadcn** (live) | v2 — instrument | v1 — topographic |
|---|---|---|---|
| Page | `src/pages/v3-shadcn.tsx` | `src/pages/v2-instrument.tsx` | `src/pages/v1-original.tsx` |
| Components | `src/components/v3/` | `src/components/instrument/` (+ `plates/`) | `src/components/sections/` |
| Styles | `src/styles/v3.css`, scoped under `.v3` | `src/styles/instrument.css`, scoped under `.instrument` | `src/index.css` |
| Design doc | — (the starter template's own defaults) | `DESIGN.md` | `DESIGN.topographic.md` |

All three use the same anchors (`#about … #contact`) and the same shared hooks (`use-hash-scroll`, `use-consent-inset`, `use-content`) and `lib/rich-text.tsx`. `renderRichText` takes an options argument so each system styles the same markup its own way — v3 passes `V3_RICH_TEXT` from `src/components/v3/rich-text.ts`.

`:root` in `index.css` belongs to v1, so v2 and v3 scope their tokens under a class on the page's root element. Adding a fourth system means doing the same, not editing `:root`.

The instrument system does not use `Reveal`, `useInView`, `SectionHeading`, `ContourBg` or `components/ui/*` — its specification bans scroll-triggered and ornamental motion.

### Styling

Tailwind CSS v4 with custom design tokens defined in `src/index.css` under `@theme inline`.

**Instrument (v2)** — binary only: `#fff` on `#000`, `rgba(255,255,255,.42)` for rules, `rgba(255,255,255,.70)` for supporting text. No accent hue, no radius, no shadow. One self-hosted variable family, `Noto Sans Mono Var` in `public/fonts/` (two subsets, `wdth 62.5–100` × `wght 100–900`); the width axis selects the voice — `font-stretch: 62.5%` display, `75%` text. Numbers on this surface must come from `content.ts` or be derived in `src/lib/instrument-metrics.ts` — never hand-written.

**Topographic (v1)** — `topo` green accent, `terracotta`, `hero-bg` / `hero-text`, `parchment-dark`; `font-sans` = Space Grotesk, `font-serif` = Instrument Serif.

**shadcn (v3)** — the starter template's palette verbatim: New York style, `neutral` base, `--radius: 0.625rem`, light and dark, no accent hue of its own. Built only from `components/ui/*` primitives (Card, Badge, Button, Accordion, Sheet, Separator, Sonner) — add more with `npx shadcn@latest add <name>`, which leaves `index.css` alone. Dark mode is a `.dark` class on `<html>`, driven by `lib/theme-store.ts` through `hooks/use-theme.ts`; v1 and v2 declare no dark tokens, so the class is inert for them. Copy that v3 needs and the others do not lives under `ui.v3` in the content files.

### Conventions (from README)

- Kebab-case filenames (`experience-section.tsx`, not `ExperienceSection.tsx`)
- `.ts` for non-JSX, `.tsx` only when returning JSX
- No `any` types (ESLint errors on `eslint-plugin-react-hooks`)
- Path alias `@/` maps to `src/`
