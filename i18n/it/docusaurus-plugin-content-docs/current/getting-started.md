---
sidebar_position: 2
title: Guida rapida
---

# Guida rapida

Ecco come integrare Goblin System in un progetto React/Vite.  
Gli esempi presuppongono React 18+, TypeScript e `styled-components@^6`.

## 1. Installazione

```bash
npm install pkg-fe-react-goblin-system styled-components
```

`styled-components` è l'unica peer dependency richiesta a runtime. Gli strumenti di sviluppo (linting, Storybook, Docusaurus) sono già inclusi in questa repository.

## 2. Creare un tema

```ts title="theme.ts"
import { createGoblinTheme } from 'pkg-fe-react-goblin-system'

const SECONDARIO_OCRA = '#c9971f'

export const theme = createGoblinTheme({
  palette: {
    mode: 'dark',
    secondary: { main: SECONDARIO_OCRA },
  },
})
```

- `mode` accetta `'light'` o `'dark'`.
- È sufficiente sovrascrivere `secondary.main`: il resto della palette viene completato automaticamente.
- Puoi cambiare l'accento secondario in qualsiasi momento (vedi i selettori fluorescenti nell'header).

## 3. Wrappare l'applicazione

```tsx title="App.tsx"
import { GoblinThemeProvider, CssBaseline } from 'pkg-fe-react-goblin-system'
import { theme } from './theme'

export function App() {
  return (
    <GoblinThemeProvider theme={theme}>
      <CssBaseline />
      {/* rotte, layout, modali... */}
    </GoblinThemeProvider>
  )
}
```

`CssBaseline` inietta reset, stack tipografico, styling delle scrollbar e smooth scrolling identici al portfolio.

## 4. Comporre con i componenti

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
            Combina superfici, input, navigazione e feedback pensati per il dark mode.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label="Design systems" color="primary" />
            <Chip label="Vite + TS" color="secondary" variant="outlined" />
            <Chip label="Accessibilità" color="info" />
          </Stack>
          <Button variant="contained" color="secondary">
            Esplora Storybook
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
```

Ogni componente accetta prop semantiche (es. `$variant`, `color`) oppure l'`sx` per override basati sul tema.

## 5. Accedere ai token ovunque

```ts title="useSpacing.ts"
import { useGoblinTheme } from 'pkg-fe-react-goblin-system'

export function useSpacing(multiplier = 1) {
  const theme = useGoblinTheme()
  return theme.spacing(multiplier)
}
```

Il hook `useGoblinTheme` restituisce il tema completo: breakpoints, mixin, ombre e helper tipografici inclusi.

## Continua a esplorare

- Approfondisci le [Fondamenta](./components/foundations.md) per capire il contratto del tema.
- Apri Storybook tramite il link nell'header per ispezionare ogni componente dal vivo.
- Scopri come [estendere i token](./styles/theme.md) o personalizzare il [foglio di stile globale](./styles/global-style.md).
