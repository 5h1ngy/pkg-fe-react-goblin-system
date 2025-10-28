# Goblin System 🧙‍♂️✨

[![Docs](https://img.shields.io/badge/docs-live-7f5af0?style=flat&logo=gitbook&logoColor=white)](https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs)
[![Storybook](https://img.shields.io/badge/storybook-preview-fd4bb3?style=flat&logo=storybook&logoColor=white)](https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook)
[![Build](https://img.shields.io/badge/build-vite-646cff?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/styling-styled--components-db7093?style=flat&logo=styled-components&logoColor=white)](https://styled-components.com/)

Fog gradients, neon surfaces, and a dark-first React component system extracted from the original Goblin portfolio. This monorepo packages the production UI kit, its theme tooling, a cinematic documentation site, and Storybook playground in one place—ready for you to ship atmospheric case studies without reinventing the design language.

<p align="center">
  <img src="assets/logo.png" alt="Goblin System" width="220" />
</p>

---

## 🧭 At a Glance

- **One theme to rule them all** – `createGoblinTheme(mode, accent)` emits coordinated palettes, shadows, transitions, and spacing utilities. Accent changes ripple across docs, Storybook, and runtime via a shared provider.
- **Atomic + shell primitives** – Layout, surface, navigation, data-display, and feedback components live under `packages/components`, composed atop `styled-components` with consistent `sx` styling props.
- **Docs + Storybook synergy** – Docusaurus renders the full experience shell with accent picker and quick links, while Storybook exposes interactive knobs for the identical theme setup.
- **Type-safe, tree-shakeable exports** – Every package ships ES modules and typed entry points (`pkg-fe-react-goblin-system/components`, `/foundations`, `/system`) so you can cherry-pick without bundling debt.
- **Zero external runtime deps** – React 18+ and `styled-components` are the only peer requirements. Everything else lives in dev dependencies to keep bundles lean.

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
├─ packages/                    # Publishable design system source
│  ├─ components/               # Layout, navigation, surfaces, data-display, etc.
│  ├─ foundations/              # Theme creation, providers, icons, global styles
│  └─ system/                   # sx resolver and tokens
├─ .docs/                       # Docusaurus site with Goblin shell & accent picker
├─ .story/                      # Storybook configuration mirroring docs theme
├─ docs/                        # Markdown guides surfaced by Docusaurus
└─ scripts/                     # Workspace automation (build, copy, clean)
```

---

## 🧪 Tooling & Scripts

| Command | What it does |
| --- | --- |
| `npm run docs:dev` | Start the Docusaurus site with hot reload on port 3000. |
| `npm run docs:build` | Build static docs to `dist/docs` and copy Storybook assets. |
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
2. `npm run docs:dev` or `npm run storybook:dev` to iterate on visuals.
3. Update or add stories/docs alongside components—both environments consume the same exports.
4. `npm run lint` and `npm run format` before opening a PR.

We keep the git history human-first: use descriptive commits, prefer smaller PRs, and include before/after screenshots or Storybook links when touching visuals.

---

## 📄 License

MIT © 5h1ngy — feel free to remix, extend, and deploy the Goblin aesthetic in your own projects.
