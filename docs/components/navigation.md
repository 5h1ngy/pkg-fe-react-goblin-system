---
sidebar_position: 7
title: Navigation
---

# Navigation

Navigation components structure application hierarchies, menus, and multi-step flows.

## Component catalog

| Component | Highlights |
| --- | --- |
| `AppBar`, `Toolbar` | Sticky top bars with elevation-aware styling and scroll handling. |
| `Breadcrumbs` | Accessible breadcrumb trail with customizable separators. |
| `Drawer` | Responsive side navigation with overlay mode for mobile. |
| `Link` | Theme-aware anchor that respects color variants. |
| `Menu`, `MenuItem` | Context menus and dropdown lists built on `Popover`/`Portal`. |
| `Pagination` | Page navigation with first/last buttons and compact mode. |
| `SpeedDial`, `SpeedDialAction` | Floating quick actions with radial expansion. |
| `Stepper`, `Step`, `StepLabel` | Linear and non-linear task progress indicators. |
| `Tabs`, `Tab`, `TabPanel` | Horizontal navigation with lazy loading support. |

## Example: dashboard header

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
        <Breadcrumbs aria-label="breadcrumbs">
          <Link color="inherit" href="#">
            Home
          </Link>
          <Link color="inherit" href="#">
            Projects
          </Link>
          <Typography color="textSecondary">Neon UI kit</Typography>
        </Breadcrumbs>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          startIcon={<AddIcon size={16} />}
        >
          New entry
        </Button>
        <IconButton
          aria-label="More actions"
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <MoreHorizIcon size={18} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Rename</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Duplicate</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Archive</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
```

## Tips

- All navigation components are keyboard accessible by default; focus states are tuned for dark backgrounds.
- `Tabs` and `Stepper` expose props to control orientation and alignment—use them for onboarding flows or settings pages.
- Combine `SpeedDial` with `Snackbar` to surface quick actions that require confirmation.
