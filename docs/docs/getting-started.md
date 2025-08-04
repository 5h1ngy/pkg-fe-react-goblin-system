---
sidebar_position: 2
---

# Getting Started

This guide takes you from an empty React entry point to a foggy, glowing interface powered by Goblin System.

## 1. Install

```bash
yarn add pkg-fe-react-goblin-system styled-components
# npm / pnpm work the same
```

The runtime surface only depends on React 18+ and `styled-components`.

## 2. Create a Theme

```ts title="theme.ts"
import { createTheme } from 'pkg-fe-react-goblin-system'

export const theme = createTheme('light', '#7f5bff')
```

- `mode` can be either `'light'` or `'dark'`.
- `accent` feeds pills, borders, outlines, gradients and ambient shadows.

## 3. Wire the Provider

```tsx title="main.tsx"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'pkg-fe-react-goblin-system'
import { theme } from './theme'

export function AppRoot() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* screens */}
    </ThemeProvider>
  )
}
```

`GlobalStyle` brings the typography stack, smooth scrolling and link resets you see inside the portfolio scaffold.

## 4. Compose Sections

```tsx title="Hero.tsx"
import {
  Section,
  SurfaceButton,
  ActionLink,
  Card,
  TagList,
  TagPill,
} from 'pkg-fe-react-goblin-system'

export function Hero() {
  return (
    <Section id="hero" accent="Featured Work" description="Atoms tuned for narrative portfolios.">
      <Card $variant="gradient" $interactive>
        <p>Blend gradient cards, badges and pills to describe each case study.</p>
        <TagList>
          <TagPill>Motion</TagPill>
          <TagPill>DX</TagPill>
          <TagPill>3D</TagPill>
        </TagList>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <SurfaceButton $tone="accent">Open project</SurfaceButton>
          <ActionLink href="#">See process →</ActionLink>
        </div>
      </Card>
    </Section>
  )
}
```

## 5. Optional Enhancements

- **Dark mode toggle** – Call `createTheme('dark', accent)` when the user flips a switch and feed it back into `ThemeProvider`.
- **Accent switcher** – rotate the accent with `SECONDARY_COLORS` for per-section highlights.
- **Type safety** – `AppTheme` is exported, so custom styled-components automatically infer the palette.

## Next Steps

- Explore every atom in [Components > Overview](./components/index.md).
- Learn how gradients, fog and borders are generated in [Theme tokens](./styles/theme.md).
- Review the global reset in [Styles > Global Style](./styles/global-style.md).
