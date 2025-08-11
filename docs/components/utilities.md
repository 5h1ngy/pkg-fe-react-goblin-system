---
sidebar_position: 8
title: Utilities & Portals
---

# Utilities & Portals

Utility components power cross-cutting behaviour such as overlays, collapsible sections, and portal rendering.

## Component catalog

| Component | Description |
| --- | --- |
| `Collapse` | Animated toggle for vertically revealing content. |
| `Modal` | High-level modal shell combining `Backdrop`, `Portal`, and focus trapping. |
| `Popover` | Anchored floating surface with positioning helpers. |
| `Portal` | Renders children into `document.body` (or a custom container). |
| `ClickAwayListener` | Listens for pointer or focus events occurring outside a given element. |

## Example: contextual quick actions

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
          Toggle actions
        </Button>
        <Popover
          open={open}
          anchorEl={anchorRef.current}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <Stack spacing={1} sx={{ padding: 2, minWidth: 200 }}>
            <Typography variant="subtitle2">Quick actions</Typography>
            <Button size="small" variant="text">
              Share
            </Button>
            <Button size="small" variant="text">
              Duplicate
            </Button>
          </Stack>
        </Popover>
      </div>
    </ClickAwayListener>
  )
}
```

## Tips

- `Portal` is exported directly if you need to render content outside the DOM hierarchy—for example, for Mapbox or Three.js overlays.
- Pair `ClickAwayListener` with `Popover` or custom menus to close interactions when the user clicks outside.
- `Modal` already includes a `Backdrop`; you can use `Dialog` when you need a more opinionated layout.
