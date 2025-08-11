---
sidebar_position: 1
title: Stile globale
---

# Stile globale

Goblin System espone due helper per gli stili globali: `CssBaseline` e `GlobalStyles`.  
Entrambi si appoggiano a `styled-components` e utilizzano il tema attivo.

## CssBaseline

`CssBaseline` è un componente pronto all'uso che inietta i reset standard di Goblin:

- `box-sizing: border-box` sull'intero DOM.
- Smooth scrolling su `html` e scrolling inerziale su dispositivi touch.
- Background scuro o chiaro sincronizzato con `palette.mode`.
- Stack tipografico (`Inter`, font di sistema) applicato al root.
- Normalizzazione di link, immagini, button, input e textarea.
- Scrollbar tematizzate per WebKit e Firefox.

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

Quando servono regole aggiuntive puoi importare `GlobalStyles`, un semplice export `createGlobalStyle`, e aggiungere il tuo foglio di override.

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

Poiché gli override leggono il tema, la palette si aggiorna automaticamente quando l'utente cambia modalità o seleziona un nuovo colore secondario.

## Font e metriche

- Font principale: `Inter`, fallback `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- Font size base: `14px` (0.875rem) con densità pensata per layout narrativi.
- Le line-height seguono la scala tipografica generata da `createGoblinTheme`.

Sovrascrivi questi valori passando un oggetto `typography` a `createGoblinTheme`.
