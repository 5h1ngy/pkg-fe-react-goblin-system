# Goblin System 🧙‍♂️✨

[![Docs](https://img.shields.io/badge/docs-live-7f5af0?style=flat&logo=gitbook&logoColor=white)](https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs)
[![Storybook](https://img.shields.io/badge/storybook-preview-fd4bb3?style=flat&logo=storybook&logoColor=white)](https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook)
[![Build](https://img.shields.io/badge/build-vite-646cff?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/styling-styled--components-db7093?style=flat&logo=styled-components&logoColor=white)](https://styled-components.com/)

Goblin System is a dark-first React design system built from scratch with a Material UI-inspired API. The workspace ships the typed theme engine, hundreds of `styled-components` primitives, Storybook playground, and a Docusaurus site driven by the same tokens—ready to drop into any Vite or React build.

<p align="center">
  <img src="assets/logo.png" alt="Goblin System" width="220" />
</p>

---

## 🧭 At a Glance

- **Theme engine first** – `createGoblinTheme(options)` merges palettes, typography, shadows, breakpoints, and motions without leaking implementation details.
- **Material UI-style ergonomics** – Components mirror familiar props (`variant`, `color`, `size`, `sx`) while being implemented from scratch with `styled-components`.
- **Typed surface area** – Every package exports ES modules plus generated declaration files so tree-shaking and IDE tooling stay sharp.
- **Shared runtime + docs tokens** – Storybook, the Docusaurus docs, and your app all consume the same theme provider and `sx` resolver—no drift.
- **Runtime kept lean** – Only React 18+ and `styled-components@^6` are required at runtime; all tooling stays in dev dependencies.

---

## 🚀 Quick Start

1. Download the latest release archive from GitHub and install it locally (replace the version with the one you need):

```bash
VERSION=3.2.0
curl -L -o pkg-fe-react-goblin-system-$VERSION.tgz \
  "https://github.com/5h1ngy/pkg-fe-react-goblin-system/releases/download/v$VERSION/pkg-fe-react-goblin-system-$VERSION.tgz"
npm install ./pkg-fe-react-goblin-system-$VERSION.tgz styled-components
```

You can also install straight from the release URL without downloading first:

```bash
npm install \
  https://github.com/5h1ngy/pkg-fe-react-goblin-system/releases/download/v$VERSION/pkg-fe-react-goblin-system-$VERSION.tgz \
  styled-components
```

```tsx
import { ThemeProvider } from 'styled-components'
import {
  GlobalStyle,
  createGoblinTheme,
  Section,
  Card,
  SurfaceButton,
  ActionLink,
  TagList,
  TagPill,
} from 'pkg-fe-react-goblin-system'

const theme = createGoblinTheme({
  palette: { mode: 'dark', secondary: { main: '#ffb422' } },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section id="hero" accent="Featured Work">
        <Card $variant="gradient" $interactive>
          <p>Foggy gradients and pill buttons in one import.</p>
          <TagList>
            <TagPill>Motion</TagPill>
            <TagPill>DX</TagPill>
          </TagList>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <SurfaceButton $tone="accent">Open case study</SurfaceButton>
            <ActionLink href="#">See process →</ActionLink>
          </div>
        </Card>
      </Section>
    </ThemeProvider>
  )
}
```

---

## 🧩 Library Surface

| Area | Highlights | Location |
| --- | --- | --- |
| Foundations | `createGoblinTheme`, `GoblinThemeProvider`, `GlobalStyle`, accent-aware color helpers | `packages/foundations` |
| Components – Layout & Surfaces | `Section`, `Grid`, `Card`, `Accordion`, `Paper`, `Modal`, `Popover` | `packages/components/{layout,surfaces,utils}` |
| Components – Data & Feedback | `Typography`, `Badge`, `Chip`, `Snackbar`, `Collapse`, `ClickAwayListener` | `packages/components/{data-display,feedback}` |
| Navigation & Inputs | `AppBar`, `Tabs`, `SpeedDial`, `Button`, `Select`, `TextField` | `packages/components/{navigation,inputs}` |
| System | `sx` resolver, spacing normalisation, style merging utilities | `packages/system` |

All exports are available from the root, or from scoped paths when you need granular control:

- `pkg-fe-react-goblin-system` – re-exports everything.
- `pkg-fe-react-goblin-system/components` – component namespaces.
- `pkg-fe-react-goblin-system/foundations` – theming and icon primitives.
- `pkg-fe-react-goblin-system/system` – low-level styling helpers.

---

## 🌌 Theme Customisation

The accent color powers gradients, badges, focus states, and docs chrome. Update it at runtime:

```tsx
import { GoblinThemeProvider, CssBaseline } from 'pkg-fe-react-goblin-system'

const secondary = '#39ff14' // neon green

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <GoblinThemeProvider
      theme={{
        palette: {
          mode: 'dark',
          secondary: { main: secondary },
        },
      }}
    >
      <CssBaseline />
      {children}
    </GoblinThemeProvider>
  )
}
```

- `light` / `dark` variants, contrast text, and action overlays (`hover`, `selected`, `focus`) are generated automatically from the main color.
- Docs and Storybook ship with an accent picker that writes to `localStorage`; reuse the same hook in your app if you want end-user accent control.

---

## 📁 Repository Layout

```
.
├─ packages/          # Publishable source for foundations, components, and system helpers
│  ├─ components/     # Layout, navigation, inputs, data-display, surfaces, feedback, utilities
│  ├─ foundations/    # Theme factory, provider, global styles, icon set, color helpers
│  └─ system/         # `sx` resolver and shared styling utilities
├─ .docs/             # Docusaurus workspace that renders the documentation site
├─ .story/            # Storybook configuration mirroring the runtime theme contract
├─ docs/              # Markdown content consumed by Docusaurus
├─ dist/              # Build artefacts (`lib`, `storybook`, `docusaurus`)
└─ assets/            # Project branding and shared imagery
```

---

## 🧪 Tooling & Scripts

| Command | What it does |
| --- | --- |
| `npm run docusaurus:dev` | Start the Docusaurus site with hot reload on port 3000. |
| `npm run docusaurus:build` | Build static docs to `dist/docusaurus` and copy Storybook assets. |
| `npm run storybook:dev` | Launch Storybook with dark mode + accent controls. |
| `npm run storybook:build` | Emit static Storybook at `dist/storybook`. |
| `npm run lib:build` | Produce the component library bundle, types, and npm tarball under `dist/lib`. |
| `npm run lint` / `lint:fix` | Enforce ESLint across packages, docs, and stories. |
| `npm run format` | Format the repo with Prettier (TS/TSX/JS/JSON/MD). |

> 📝 Tip: every push to `main` that bumps the version runs `npm run lib:build`, publishes an updated tarball to the GitHub release, and keeps docs/Storybook in sync. For local work without hitting GitHub, run `npm run lib:build` and install the generated file from `dist/lib`.

---

## 📚 Learning Resources

- **Live Docs** – cross-sections the architecture, theming model, and integration patterns.<br />
  👉 https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs
- **Storybook** – hands-on playground with controls wired to the same theme provider.<br />
  👉 https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook
- **Source Walkthrough** – check `docs/getting-started.md` and `docs/styles/theme.md` for code-focused tutorials inside the repo.

---

## 🤝 Contributing

1. `npm install` to hydrate the workspace.
2. `npm run docusaurus:dev` or `npm run storybook:dev` to iterate on visuals.
3. Update or add stories/docs alongside components—both environments consume the same exports.
4. `npm run lint` and `npm run format` before opening a PR.

We keep the git history human-first: use descriptive commits, prefer smaller PRs, and include before/after screenshots or Storybook links when touching visuals.

---

## 📄 License

MIT © 5h1ngy — feel free to remix, extend, and deploy the Goblin aesthetic in your own projects.
