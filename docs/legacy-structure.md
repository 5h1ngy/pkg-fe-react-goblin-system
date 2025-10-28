# Legacy Goblin System Snapshot

This page documents the evolution from the early portfolio extraction (≤2.x) to the current 3.x codebase.  
Use it as a reference when you meet projects that still depend on the legacy bundle.

## Current generation (v3.x)

- Rewritten from scratch with a Material UI-inspired contract and `styled-components@^6`.
- Source lives under `packages/{foundations,components,system}` with typed entry points and `sx` helpers.
- Build pipeline managed by Vite (`vite.config.lib.ts`) and `vite-plugin-dts` to emit ES modules plus declaration files.
- Documentation split between Storybook (`.story/`) and a Docusaurus workspace (`.docs/`) reading Markdown from `docs/`.

## Legacy generation (≤2.x)

- Components and tokens were extracted directly from the original Goblin portfolio shell.
- Structure lived under a single `src/` tree with ad-hoc folders (`shared`, `layout`, `metadata`, `overlays`).
- Theme factory exposed `createTheme(mode, accent)` with limited typing and no `sx` resolver.
- Storybook stories were organised manually per domain, with minimal automation and no dedicated docs site.

## Migrating an older project

1. Replace imports from `pkg-fe-react-goblin-system/styles` with `pkg-fe-react-goblin-system/foundations`.
2. Swap legacy atoms (`SurfaceButton`, `ActionLink`, `TagList`, etc.) for their 3.x equivalents (`Button`, `ActionLink`, `Chip`).
3. Adopt the new `GoblinThemeProvider` + `CssBaseline` pair; the legacy `GlobalStyle` remains available for overrides.
4. Update theming overrides to use the richer `createGoblinTheme` options (palette, typography, spacing, transitions, mixins).

Keeping this delta in mind will help when triaging bug reports or planning migrations away from the portfolio-era package.
