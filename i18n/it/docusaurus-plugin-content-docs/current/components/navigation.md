---
sidebar_position: 7
title: Navigazione
---

# Navigazione

I componenti di navigazione strutturano gerarchie, menu e flussi multi-step.

## Catalogo componenti

| Componente | Caratteristiche |
| --- | --- |
| `AppBar`, `Toolbar` | Barre superiori sticky con gestione dell'elevazione e dello scroll. |
| `Breadcrumbs` | Percorso gerarchico accessibile con separatori personalizzabili. |
| `Drawer` | Navigazione laterale responsiva, con modalità overlay per mobile. |
| `Link` | Anchor tematizzata che rispetta le varianti colore. |
| `Menu`, `MenuItem` | Menu contestuali e dropdown basati su `Popover`/`Portal`. |
| `Pagination` | Navigazione di pagina con pulsanti iniziale/finale e modalità compatta. |
| `SpeedDial`, `SpeedDialAction` | Azioni rapide fluttuanti con espansione radiale. |
| `Stepper`, `Step`, `StepLabel` | Indicatore di avanzamento lineare e non lineare. |
| `Tabs`, `Tab`, `TabPanel` | Navigazione orizzontale con supporto lazy loading. |

## Esempio: header dashboard

```tsx
import {
  AppBar,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from 'pkg-fe-react-goblin-system/components'
import { AddIcon, MoreHorizIcon } from 'pkg-fe-react-goblin-system'
import { useState } from 'react'

export function DashboardHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ gap: 2 }}>
        <Breadcrumbs aria-label="Percorso">
          <Link color="inherit" href="#">
            Home
          </Link>
          <Link color="inherit" href="#">
            Progetti
          </Link>
          <Typography color="textSecondary">Neon UI kit</Typography>
        </Breadcrumbs>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          startIcon={<AddIcon size={16} />}
        >
          Nuova voce
        </Button>
        <IconButton
          aria-label="Altre azioni"
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <MoreHorizIcon size={18} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Rinomina</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Duplica</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Archivia</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
```

## Suggerimenti

- Tutti i componenti di navigazione sono accessibili da tastiera; gli stati di focus sono ottimizzati per sfondi scuri.
- `Tabs` e `Stepper` espongono prop per controllare orientamento e allineamento: ideali per onboarding o wizard.
- Combina `SpeedDial` con `Snackbar` per azioni rapide che richiedono conferma.
