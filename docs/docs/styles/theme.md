---
sidebar_position: 1
title: Theme Tokens
---

`src/styles/theme.ts` exports `createTheme(mode, accent)` plus the `AppTheme` typing. The function stitches together color palettes, gradients and shadows that every component consumes through `styled-components`.

## Structure

```ts
export interface AppTheme {
  mode: 'dark' | 'light'
  colors: {
    background: string
    surface: string
    surfaceMuted: string
    surfaceElevated: string
    textPrimary: string
    textSecondary: string
    textMuted: string
    accent: string
    accentSoft: string
    accentOutline: string
    accentOutlineMuted: string
    border: string
  }
  gradients: {
    background: string
    overlay: string
    fog: string
  }
  layout: {
    maxWidth: string
    gutter: string
  }
  shadows: {
    ambient: string
    accent: string
  }
}
```

## Accent helpers

`SECONDARY_COLORS` exposes a curated palette of four additional accents. Combine it with Storybook toolbar controls or build your own color picker:

```ts
import { SECONDARY_COLORS, createTheme } from 'pkg-fe-react-goblin-system'

const accent = SECONDARY_COLORS[2]
const theme = createTheme('dark', accent)
```

`accentSoft`, `accentOutline` and `accentOutlineMuted` are generated via `withAlpha`, so outlines always match the base accent without manual tweaking.

## Layout tokens

- `layout.maxWidth` – aligns with the original portfolio content width (`880px`).
- `layout.gutter` – horizontal spacing used by grid wrappers.

## Using in custom components

```ts
import styled from 'styled-components'

export const FrostedPanel = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`
```
