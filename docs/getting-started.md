---
sidebar_position: 2
title: Getting Started
---

# Getting Started

Follow these steps to plug Goblin System into a fresh React/Vite project.  
All examples assume React 18+, TypeScript, and `styled-components@^6`.

## 1. Install the packages

```bash
npm install pkg-fe-react-goblin-system styled-components
```

`styled-components` is the only peer dependency required at runtime. Development tooling (linting, Storybook, Docusaurus) already lives in this repository.

## 2. Create a theme instance

```ts title="theme.ts"
import { createGoblinTheme } from 'pkg-fe-react-goblin-system'

const SECONDARY_OCHRE = '#c9971f'

export const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
    secondary: { main: SECONDARY_OCHRE },
  },
})
```

- `mode` supports `'light'` and `'dark'`.
- Only `secondary.main` is required—the rest of the palette is merged from Goblin defaults.
- You can swap the `secondary` swatch at runtime (see the neon pickers in the docs header for inspiration).

## 3. Wrap your application

```tsx title="App.tsx"
import { GoblinThemeProvider, CssBaseline } from 'pkg-fe-react-goblin-system'
import { theme } from './theme'

export function App() {
  return (
    <GoblinThemeProvider theme={theme}>
      <CssBaseline />
      {/* routes, layouts, modals... */}
    </GoblinThemeProvider>
  )
}
```

`CssBaseline` injects the global reset, typography stack, scrollbar styling, and smooth scroll behaviour that mirror the portfolio.

## 4. Compose with components

```tsx title="ExampleCard.tsx"
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Stack,
  Typography,
  Chip,
} from 'pkg-fe-react-goblin-system/components'

export function ExampleCard() {
  return (
    <Card $variant="elevated" sx={{ maxWidth: 360 }}>
      <CardHeader title="Neon UI kit" subheader="Goblin System" />
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body1">
            Compose surfaces, inputs, navigation and feedback primitives tuned for dark mode.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label="Design systems" color="primary" />
            <Chip label="Vite + TS" color="secondary" variant="outlined" />
            <Chip label="Accessibility" color="info" />
          </Stack>
          <Button variant="contained" color="secondary">
            Explore Storybook
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
```

Every component accepts either semantic props (e.g. `$variant`, `color`) or an `sx` prop for theme-aware styling overrides.

## 5. Access tokens from anywhere

```ts title="useSpacing.ts"
import { useGoblinTheme } from 'pkg-fe-react-goblin-system'

export function useSpacing(multiplier = 1) {
  const theme = useGoblinTheme()
  return theme.spacing(multiplier)
}
```

The `useGoblinTheme` hook exposes the fully merged theme, including breakpoints, mixins, shadows and typography helpers.

## continue exploring

- Dive into [Foundations](./components/foundations.md) to understand the theme contract.
- Browse Storybook via the header link to inspect every component live.
- Learn how to [extend tokens](./styles/theme.md) or tweak the [global style sheet](./styles/global-style.md).
