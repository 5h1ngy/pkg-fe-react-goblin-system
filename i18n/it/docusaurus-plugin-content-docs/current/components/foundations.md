---
sidebar_position: 2
title: Fondamenta
---

# Fondamenta

Il pacchetto foundations espone le primitive che rendono ogni componente sensibile al tema Goblin.

## Motore di tema

| Export | Descrizione |
| --- | --- |
| `createGoblinTheme(options)` | Genera un tema completo unendo i tuoi override ai default di Goblin (palette, tipografia, spaziatura, breakpoint, ombre, transizioni, mixin). |
| `GoblinThemeProvider` | Wrapper del `ThemeProvider` di `styled-components`; accetta un tema completo o `GoblinThemeOptions`. |
| `useGoblinTheme()` | Restituisce il tema risolto. Utile in hook personalizzati e override stilistici. |
| `GoblinThemeProviderProps` | Helper TypeScript per tipizzare provider personalizzati. |

### Override della palette

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

Puoi fornire porzioni di palette (`primary`, `secondary`, `info`, ecc.); Goblin completa automaticamente i valori mancanti.

## Stili globali e tipografia

| Export | Descrizione |
| --- | --- |
| `CssBaseline` | Inietta reset tipografico, scrollbar tematizzate, smooth scrolling e colori coerenti con il tema. |
| `GlobalStyles` | Helper `createGlobalStyle` per aggiungere reset o regole globali personalizzate. |
| `useGoblinTheme` | Accedi a spaziatura, breakpoint, transizioni e mixin direttamente dal tema. |

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

## Icone

`packages/foundations/icons.tsx` esporta un set di icone curate (close, chevron, luna, sole, ecc.). Sono utilizzate internamente da pulsanti, toggle e componenti di navigazione, ma puoi importarle anche nei tuoi componenti.

```tsx title="CloseButton.tsx"
import { IconButton } from 'pkg-fe-react-goblin-system/components'
import { CloseIcon } from 'pkg-fe-react-goblin-system'

export function CloseButton(props: React.ComponentProps<typeof IconButton>) {
  return (
    <IconButton aria-label="Chiudi" {...props}>
      <CloseIcon size={18} />
    </IconButton>
  )
}
```

## Tipi TypeScript

- `GoblinTheme` descrive l'intero oggetto tema.
- `GoblinThemeOptions` tipizza gli oggetti di configurazione.
- `PaletteMode`, `PaletteOverrides` e gli altri helper sono esportati per essere riutilizzati.

```ts
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

declare module 'styled-components' {
  export interface DefaultTheme extends GoblinTheme {}
}
```
