---
sidebar_position: 8
title: Utility e portal
---

# Utility e portal

Questi componenti coprono comportamenti trasversali come overlay, sezioni collassabili e rendering in portali.

## Catalogo componenti

| Componente | Descrizione |
| --- | --- |
| `Collapse` | Animazione per rivelare contenuti verticali. |
| `Modal` | Shell modale ad alto livello che combina `Backdrop`, `Portal` e gestione del focus. |
| `Popover` | Superficie flottante ancorata con helper di posizionamento. |
| `Portal` | Renderizza i figli in `document.body` (o in un container personalizzato). |
| `ClickAwayListener` | Intercetta interazioni al di fuori di un elemento per chiudere menu o overlay. |

## Esempio: azioni contestuali

```tsx
import { Button, ClickAwayListener, Popover, Stack, Typography } from 'pkg-fe-react-goblin-system/components'
import { useRef, useState } from 'react'

export function QuickActions() {
  const anchorRef = useRef<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Button ref={anchorRef} color="secondary" onClick={() => setOpen((value) => !value)}>
          Azioni rapide
        </Button>
        <Popover
          open={open}
          anchorEl={anchorRef.current}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <Stack spacing={1} sx={{ padding: 2, minWidth: 200 }}>
            <Typography variant="subtitle2">Azioni</Typography>
            <Button size="small" variant="text">
              Condividi
            </Button>
            <Button size="small" variant="text">
              Duplica
            </Button>
          </Stack>
        </Popover>
      </div>
    </ClickAwayListener>
  )
}
```

## Suggerimenti

- `Portal` è esportato direttamente: usalo per HUD, overlay di canvas o mappe interattive.
- Associa `ClickAwayListener` a `Popover` o menu custom per chiudere l'interazione cliccando all'esterno.
- `Modal` include già un `Backdrop`; usa `Dialog` quando ti serve una struttura più opinabile.
