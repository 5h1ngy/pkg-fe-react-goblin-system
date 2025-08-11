---
sidebar_position: 2
title: Token di tema
---

# Token di tema

`createGoblinTheme` è il punto di ingresso per generare un oggetto tema completamente tipizzato.  
Unisce i tuoi override con i default di Goblin e restituisce una struttura consumata da ogni componente.

## Struttura del tema

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

La forma è vicina a quella di Material UI, con un tocco Goblin per gradienti e ombre.

## Override dei token

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
  spacing: 12,
  shadows: [
    'none',
    '0 10px 30px rgba(0, 240, 255, 0.25)',
    // ...
  ],
})
```

- **Palette**: fornisci oggetti parziali (`primary`, `secondary`, ecc.). È sufficiente `main`, il resto viene calcolato.
- **Tipografia**: sovrascrivi varianti specifiche o il font family globale.
- **Spaziatura**: passa una funzione `(fattore) => string` o un numero base; Goblin lo converte in rem.
- **Ombre**: sostituisci l'array predefinito per adeguarlo al tuo brand.

## Helper responsivi

- `theme.breakpoints.up('md')` restituisce la media query corrispondente.
- `theme.breakpoints.between('sm', 'lg')` aiuta nella composizione di oggetti `sx` o styled component.
- `theme.mixins.toolbar` mantiene gli header allineati con l'altezza dell'App Bar.

## Uso dei token in `sx`

```tsx
import { Card, Typography } from 'pkg-fe-react-goblin-system/components'

export function HighlightCard() {
  return (
    <Card
      sx={(theme) => ({
        padding: theme.spacing(4),
        background:
          theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : theme.palette.grey[100],
        border: `1px solid ${theme.palette.secondary.main}`,
        boxShadow: theme.shadows[9],
      })}
    >
      <Typography variant="h5">Colore secondario pronto</Typography>
      <Typography variant="body2" color="textSecondary">
        La palette fluorescente nell'header aggiorna istantaneamente <code>theme.palette.secondary</code>.
      </Typography>
    </Card>
  )
}
```

## Ricorda Storybook

La toolbar di Storybook espone gli stessi controlli (`mode`, `primary`) presenti nell'header della documentazione. Usala per testare palette differenti e copiare i valori risultanti nei tuoi override.
