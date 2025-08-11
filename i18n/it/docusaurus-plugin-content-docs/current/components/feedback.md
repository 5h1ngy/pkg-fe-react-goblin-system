---
sidebar_position: 6
title: Feedback e overlay
---

# Feedback e overlay

Mostra notifiche, conferme e informazioni di stato con componenti che rispettano l'estetica neon di Goblin.

## Catalogo componenti

| Componente | Scenario |
| --- | --- |
| `Alert` | Banner inline con `severity` (`success`, `info`, `warning`, `error`). |
| `Backdrop` | Overlay bloccante sincronizzato con la modalità attiva. |
| `CircularProgress`, `LinearProgress` | Loader indeterminati e determinati. |
| `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions` | Struttura modale accessibile completa. |
| `Skeleton` | Placeholder shimmer per stati di caricamento. |
| `Snackbar` | Notifiche temporanee basate su `Portal`. |
| `Tooltip` | Suggerimenti contestuali con arrow e delay configurabile. |

## Esempio: flusso di conferma

```tsx
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
  Tooltip,
} from 'pkg-fe-react-goblin-system/components'
import { useState } from 'react'

export function DeleteProject() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(false)

  return (
    <>
      <Tooltip title="Rimuovi definitivamente il progetto">
        <Button color="error" variant="outlined" onClick={() => setOpen(true)}>
          Elimina progetto
        </Button>
      </Tooltip>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Eliminare questo progetto?</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Alert severity="warning">
              Stai per eliminare storie, asset e analytics collegati a questo progetto.
            </Alert>
            <Alert severity="info">Questa azione non può essere annullata.</Alert>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Annulla</Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              setOpen(false)
              setToast(true)
            }}
          >
            Elimina
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toast}
        onClose={() => setToast(false)}
        message="Progetto eliminato"
        autoHideDuration={4000}
      />
    </>
  )
}
```

## Suggerimenti

- Avvolgi azioni distruttive con `Dialog` per garantire la corretta gestione del focus.
- `Snackbar` utilizza `Portal`; puoi impilare toast fornendo chiavi univoche.
- Combina `Backdrop` con indicatori di progresso per schermate cariche di dati.
