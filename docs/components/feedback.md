---
sidebar_position: 6
title: Feedback & Overlays
---

# Feedback & Overlays

Notify, confirm, and inform users with feedback components that embrace Goblin's neon aesthetic.

## Component catalog

| Component | Use case |
| --- | --- |
| `Alert` | Inline status banners with `severity` (`success`, `info`, `warning`, `error`). |
| `Backdrop` | Blocking overlay that matches the current theme mode. |
| `CircularProgress`, `LinearProgress` | Indeterminate and determinate loaders. |
| `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions` | Accessible modal dialog scaffold. |
| `Skeleton` | Placeholder shimmer for loading states. |
| `Snackbar` | Temporary toast notifications built on top of the portal utility. |
| `Tooltip` | Contextual hints with arrow and delay configuration. |

## Example: confirmation flow

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
      <Tooltip title="Remove project permanently">
        <Button color="error" variant="outlined" onClick={() => setOpen(true)}>
          Delete project
        </Button>
      </Tooltip>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete this project?</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Alert severity="warning">
              You are about to delete all stories, assets, and analytics linked to this project.
            </Alert>
            <Alert severity="info">This action cannot be undone.</Alert>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              setOpen(false)
              setToast(true)
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toast}
        onClose={() => setToast(false)}
        message="Project deleted"
        autoHideDuration={4000}
      />
    </>
  )
}
```

## Tips

- Wrap destructive actions with `Dialog` to ensure consistent keyboard focus management.
- `Snackbar` uses `Portal` internally; you can stack toasts by providing unique keys.
- Combine `Backdrop` with progress indicators to build busy states for data-heavy screens.
