# Goblin System

Portfolio-grade React components plus the exact theme and fog gradients used in the original portfolio site.

![Goblin System](assets/logo.png)

## Highlights

- **Shared atoms** — `src/components/shared` contains ActionLink, SurfaceButton, IconButton, Card, Section, MenuSurface, MetaLabel, Modal shell, Tag utilities, TextLink and VisuallyHidden.
- **Header & Footer included** — locale switcher, accent picker and footer link rail land beside the shared atoms so you can recreate the full shell.
- **One theme to rule them all** — `createTheme(mode, accent)` generates light/dark palettes, gradients and shadows. `GlobalStyle` applies the typography stack and smooth scrolling. Storybook + docs boot in dark mode with the amber accent (`#ffb422`) so you can mirror the hero aesthetic instantly.
- **Storybook + Docusaurus** — both environments showcase the same primitives and expose live accent/mode controls.
- **Zero extra dependencies** — the runtime depends only on React 18+ and `styled-components`.

## Install

```bash
npm install pkg-fe-react-goblin-system styled-components
```

## Usage

```tsx
import { ThemeProvider } from 'styled-components'
import {
  GlobalStyle,
  createTheme,
  Section,
  Card,
  SurfaceButton,
  ActionLink,
  TagList,
  TagPill,
} from 'pkg-fe-react-goblin-system'

const theme = createTheme('dark', '#ffb422')

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
            <ActionLink href="#">See process -&gt;</ActionLink>
          </div>
        </Card>
      </Section>
    </ThemeProvider>
  )
}
```

## Component Map

| Category (folder) | Components |
| --- | --- |
| Buttons & Links (`shared/buttons`) | `SurfaceButton`, `IconButton`, `PillButton`, `ActionLink`, `TextLink` |
| Layout (`shared/layout`) | `Card`, `Section` (with heading/description helpers) |
| Metadata (`shared/metadata`) | `MetaLabel`, `TagList`, `TagPill`, `VisuallyHidden` |
| Overlays (`shared/overlays`) | `Backdrop`, `MenuSurface`, `ModalOverlay`, `ModalContainer`, `ModalScrollArea` |
| Shell (`components/Header`, `components/Footer`) | `Header`, `Footer` |

All exports are available from the package root (`import { Card } from 'pkg-fe-react-goblin-system'`) as well as from the sub-paths (`pkg-fe-react-goblin-system/components`, `pkg-fe-react-goblin-system/styles`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run storybook:dev` | Run Storybook with theming controls. |
| `npm run storybook:build` | Generate the static Storybook site. |
| `npm run docs:dev` | Launch the Docusaurus docs with hot reload. |
| `npm run docs:build` | Produce the static docs under `dist/docs`. |
| `npm run lib:build` | Build the library bundle + type definitions. |
| `npm run lint` | Run ESLint across the repo. |

## Documentation & Storybook

- Docs: https://5h1ngy.github.io/pkg-fe-react-goblin-system/docs
- Storybook: https://5h1ngy.github.io/pkg-fe-react-goblin-system/storybook

## License

MIT (c) 5h1ngy
