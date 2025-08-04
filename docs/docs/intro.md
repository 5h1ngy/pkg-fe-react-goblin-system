---
sidebar_position: 1
slug: /
---

# Introduction to Goblin System

The new **Goblin System** distills the portfolio experience into a compact component kit powered by `styled-components`.  
Every piece in the library lives inside `src/components/shared` and speaks the same theme language defined in `src/styles`.

## What You Get

- **Curated building blocks** – Action links, pill buttons, cards, sections, tags and overlays ready for storytelling layouts.
- **One source of truth** – `createTheme` produces light/dark palettes plus gradients, fog layers and shadows that every component consumes.
- **Just React + styled-components** – No React Router, Redux or form baggage. Drop the toolkit into any app without side effects.
- **Docs & Storybook in sync** – Documentation and stories now describe exactly the shared components that ship in the package.

## Install

```bash
npm install pkg-fe-react-goblin-system styled-components
# or
yarn add pkg-fe-react-goblin-system styled-components
```

## Minimal Setup

```tsx title="app.tsx"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, createTheme, SurfaceButton } from 'pkg-fe-react-goblin-system'

const theme = createTheme('dark', '#7f5bff')

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SurfaceButton $tone="accent">Launch</SurfaceButton>
    </ThemeProvider>
  )
}
```

## Library Map

| Area | What it contains |
| --- | --- |
| `components/shared` | ActionLink, Backdrop, Button primitives, Card, Menu surface, MetaLabel, Modal shell, Section scaffolding, Tag utilities, TextLink, VisuallyHidden. |
| `styles` | `GlobalStyle`, `createTheme`, icon set, theme typings and helpers. |
| `src/index.tsx` | Re-exports everything so you can `import { Card } from 'pkg-fe-react-goblin-system'`. |

## Next Steps

- Follow the [Getting Started](./getting-started.md) guide.
- Dive into the [component breakdown](./components/index.md).
- Learn how to [shape the theme](./styles/theme.md).
