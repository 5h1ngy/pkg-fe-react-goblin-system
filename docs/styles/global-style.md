---
sidebar_position: 1
title: Global Style
---

# Global Style

Goblin System exposes two global styling helpers: `CssBaseline` and `GlobalStyles`.  
Both rely on `styled-components` and feed directly from the active Goblin theme.

## CssBaseline

`CssBaseline` is a ready-to-use component that injects the standard Goblin resets:

- `box-sizing: border-box` everywhere.
- Smooth scrolling on `html` and momentum scrolling on touch devices.
- Dark-first `body` background, using the current palette mode.
- Typography stack (`Inter`, system fonts) applied to the root.
- Normalised anchor, image, button, input, and textarea styles.
- Scrollbar theming for WebKit and Firefox.

```tsx
import { CssBaseline, GoblinThemeProvider } from 'pkg-fe-react-goblin-system'
import { theme } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoblinThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </GoblinThemeProvider>
  )
}
```

## GlobalStyles

If you need to append project-specific rules, import `GlobalStyles`—a plain `createGlobalStyle` export—and add your overrides underneath it.

```tsx
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from 'pkg-fe-react-goblin-system'

const CustomOverrides = createGlobalStyle`
  ::selection {
    background: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.background.paper};
  }
`

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <CustomOverrides />
      {children}
    </>
  )
}
```

Because the overrides subscribe to the theme, the palette adapts automatically when the user switches between light and dark modes or picks a new secondary color.

## Fonts and metrics

- Primary font: `Inter`, falling back to `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- Base font size: `14px` (0.875rem) with density tuned for portfolio layouts.
- Line heights follow the typography scale defined in `createGoblinTheme`.

Override these values by passing `typography` overrides into `createGoblinTheme`.
