---
sidebar_position: 2
title: Theme Tokens
---

# Theme Tokens

`createGoblinTheme` is the entry point for generating a fully-typed theme object.  
It merges your overrides with Goblin defaults and returns a structure consumed by every component.

## Theme shape

```ts title="theme shape"
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

declare const theme: GoblinTheme

theme.palette.primary.main
theme.typography.h3.fontWeight
theme.spacing(4)
theme.breakpoints.up('md')
theme.transitions.create('opacity', { duration: 160 })
theme.shadows[8]
theme.mixins.toolbar.minHeight
theme.zIndex.modal
```

The shape is intentionally close to Material UI, with additional Goblin flair for gradients and shadows.

## Overriding tokens

```ts title="theme.ts"
import { createGoblinTheme } from 'pkg-fe-react-goblin-system'

export const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
    secondary: { main: '#c9971f' },
    info: { main: '#00f0ff' },
  },
  typography: {
    fontFamily: "'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h4: { fontWeight: 600 },
  },
  spacing: 12, // base unit -> 0.75rem
  shadows: [
    'none',
    '0 10px 30px rgba(0, 240, 255, 0.25)',
    // ...
  ],
})
```

- **Palette**: supply partial objects (`primary`, `secondary`, etc.) to override colours. Only `main` is required; the rest is interpolated.
- **Typography**: override individual variants, weights, or the global font family.
- **Spacing**: pass either a function `(factor) => string` or a base number—Goblin converts it to rem.
- **Shadows**: replace the preset array to match your brand.

## Responsive helpers

- `theme.breakpoints.up('md')` returns a media query string.
- `theme.breakpoints.between('sm', 'lg')` helps with composition in `sx` objects or styled components.
- `theme.mixins.toolbar` keeps headers aligned with the App Bar height.

## Using tokens in `sx`

```tsx
import { Card, Typography } from 'pkg-fe-react-goblin-system/components'

export function HighlightCard() {
  return (
    <Card
      sx={(theme) => ({
        padding: theme.spacing(4),
        background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.grey[100],
        border: `1px solid ${theme.palette.secondary.main}`,
        boxShadow: theme.shadows[9],
      })}
    >
      <Typography variant="h5">Secondary colour ready</Typography>
      <Typography variant="body2" color="textSecondary">
        The fluorescent palette in the header updates <code>theme.palette.secondary</code> instantly.
      </Typography>
    </Card>
  )
}
```

## Remember Storybook

The Storybook toolbar exposes the same `mode` and `primary` controls found in the docs header. Use it to test different palettes, then copy the resulting values into your theme overrides.
