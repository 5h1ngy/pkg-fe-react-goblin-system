# Legacy Goblin System Snapshot

## Overview

- **Package:** `pkg-fe-react-goblin-system` (v2.1.0) – boutique React + styled-components design system extracted from a portfolio experience.
- **Runtime deps:** `react`, `react-dom`, `styled-components`.
- **Tooling:** Vite for builds, Storybook 8.6 for interactive docs, Docusaurus workspace for marketing docs, ESLint 9 + TypeScript 5.4.
- **Exports:** Components and styles re-exported from `src/index.tsx`, exposing `components/*` and `styles/*` subpaths.

## `src/` structure (2025-10-26)

```
src
├─ index.tsx                    # package entry (re-exports components + styles)
├─ vite-env.d.ts
├─ components
│  ├─ index.ts                  # central export barrel
│  ├─ Footer/
│  │  ├─ Footer.tsx             # responsive footer rail
│  │  ├─ Footer.style.ts        # layout + gradient accents
│  │  ├─ Footer.helpers.ts      # link grouping utilities
│  │  ├─ Footer.types.ts        # prop contracts
│  │  ├─ Footer.stories.tsx
│  │  └─ index.tsx
│  ├─ Header/
│  │  ├─ Header.tsx             # sticky nav bar with accent + locale controls
│  │  ├─ Header.style.ts
│  │  ├─ Header.hooks.ts        # scroll + menu logic
│  │  ├─ Header.types.ts
│  │  ├─ Header.stories.tsx
│  │  ├─ components/
│  │  │  ├─ LanguageSelect.(style|tsx)
│  │  │  ├─ MobileToggle.(style|tsx)
│  │  │  ├─ Navigation.(style|tsx)
│  │  │  └─ ThemeMenu.(style|tsx)
│  │  └─ index.tsx
│  └─ shared
│     ├─ index.ts               # re-exports shared atoms
│     ├─ buttons/
│     │  ├─ Button.tsx (SurfaceButton, IconButton, PillButton)
│     │  ├─ ActionLink.tsx
│     │  ├─ TextLink.tsx
│     │  └─ Buttons.stories.tsx
│     ├─ layout/
│     │  ├─ Card.tsx
│     │  ├─ Section.tsx
│     │  ├─ Layout.stories.tsx
│     │  └─ ScreenLoader/
│     │     ├─ ScreenLoader.tsx
│     │     ├─ ScreenLoader.style.ts
│     │     └─ index.ts
│     ├─ metadata/
│     │  ├─ MetaLabel.tsx
│     │  ├─ TagList.tsx
│     │  ├─ TagPill.tsx
│     │  ├─ VisuallyHidden.tsx
│     │  └─ Tags.stories.tsx
│     └─ overlays/
│        ├─ Backdrop.tsx
│        ├─ Menu.tsx
│        ├─ Modal.tsx
│        └─ Overlays.stories.tsx
└─ styles
   ├─ index.ts                  # exports GlobalStyle, createTheme, typography helpers
   ├─ theme.ts                  # palette + theme generator (`createTheme`)
   ├─ icons.tsx                 # inline SVG icon set tied to theme colors
   └─ styled.d.ts               # styled-components theme typing
```

## Notes

- Theme generator exposes `createTheme(mode, accent)`, `GlobalStyle`, and `SECONDARY_COLORS`.
- Components lean on `SurfaceButton` and accent outlines for the “foggy gradient” art direction.
- Storybook stories exist per domain (buttons, layout, metadata, overlays, shell).
- No state management or routing – package strictly offers styled atoms + shell pieces.

