---
sidebar_position: 2
title: Global Style
---

`src/styles/index.ts` exports `GlobalStyle`, a `createGlobalStyle` sheet that keeps the UI consistent with the portfolio scaffold.

## What it does

- Applies `box-sizing: border-box` to everything.
- Enables smooth scrolling on `html`.
- Sets the `Inter` + system stack on `body` and wires background fog:  
  ``background: ${theme.gradients.fog}, ${theme.colors.background};``
- Removes default margins from `body` and normalizes `img`, `button`, `input`, `textarea`.
- Colors anchors with the theme accent on hover/focus.

## Usage

```tsx
import { GlobalStyle } from 'pkg-fe-react-goblin-system'

export function Providers() {
  return (
    <>
      <GlobalStyle />
      {/* the rest of your providers */}
    </>
  )
}
```

You can wrap it inside any provider tree; it only needs access to a `ThemeProvider`.

## Extending

If you need to inject additional resets, create your own `createGlobalStyle` call after importing `GlobalStyle`:

```tsx
import { createGlobalStyle } from 'styled-components'
import { GlobalStyle } from 'pkg-fe-react-goblin-system'

const Overrides = createGlobalStyle`
  :root {
    --radius-xl: 32px;
  }
`

export function Providers() {
  return (
    <>
      <GlobalStyle />
      <Overrides />
    </>
  )
}
```
