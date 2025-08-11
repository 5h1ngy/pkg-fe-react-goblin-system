---
sidebar_position: 2
title: Foundations
---

# Foundations

The foundations package exposes the primitives that make every component in Goblin System theme-aware.

## Theme engine

| Export | Purpose |
| --- | --- |
| `createGoblinTheme(options)` | Builds a complete theme object by merging your overrides with the Goblin defaults (palette, typography, spacing, breakpoints, shadows, transitions, mixins). |
| `GoblinThemeProvider` | Wraps `styled-components`' `ThemeProvider`, accepts either a full theme or `GoblinThemeOptions`. |
| `useGoblinTheme()` | Hook that returns the resolved theme. Useful in custom hooks and styled overrides. |
| `GoblinThemeProviderProps` | TypeScript helpers for strongly typing local providers. |

### Palette overrides

```ts title="palette.ts"
import { createGoblinTheme } from 'pkg-fe-react-goblin-system'

export const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
    secondary: { main: '#c9971f' },
    info: { main: '#00f0ff' },
  },
})
```

Any partial palette section (`primary`, `secondary`, `info`, & co.) can be overridden; Goblin fills the rest.

## Global styles & typography

| Export | Purpose |
| --- | --- |
| `CssBaseline` | Injects typography stack, scrollbar styling, smooth scrolling, and high-contrast defaults. |
| `GlobalStyles` | `styled-components` helper for theme-aware global scopes—use when combining with additional resets. |
| `useGoblinTheme` | Reuse spacing, breakpoints, transitions, typography helpers in your custom components. |

```tsx title="Root.tsx"
import { CssBaseline, GoblinThemeProvider } from 'pkg-fe-react-goblin-system'
import { theme } from './palette'

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <GoblinThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </GoblinThemeProvider>
  )
}
```

## Icons

`packages/foundations/icons.tsx` exports a curated set of icon primitives (close, chevron, moon, sun, etc.). These are used internally for buttons, toggles, and navigation items, and can be imported directly for consistent styling.

```tsx title="CloseButton.tsx"
import { IconButton } from 'pkg-fe-react-goblin-system/components'
import { CloseIcon } from 'pkg-fe-react-goblin-system'

export function CloseButton(props: React.ComponentProps<typeof IconButton>) {
  return (
    <IconButton aria-label="Close" {...props}>
      <CloseIcon size={18} />
    </IconButton>
  )
}
```

## Type definitions

All foundations ship TypeScript definitions:

- `GoblinTheme` describes the full theme object.
- `GoblinThemeOptions` lets you strongly type configuration objects.
- `PaletteMode`, `PaletteOverrides`, and other helper types are exported for convenience.

Use them when extending the system in your own codebase.

```ts
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

declare module 'styled-components' {
  export interface DefaultTheme extends GoblinTheme {}
}
```
