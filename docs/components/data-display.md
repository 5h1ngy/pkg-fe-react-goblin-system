---
sidebar_position: 4
title: Data Display
---

# Data Display

These components communicate status, labels, and rich collections.  
Each one inherits typography, spacing, and color tokens from the theme.

## Component catalog

| Component | Key props |
| --- | --- |
| `Avatar` | `variant`, `color`, `size`, `badge` overlay. |
| `Badge` | `color`, `variant`, `max` for numeric badges. |
| `Chip` | `color`, `variant`, `onDelete`, `label`. |
| `Divider` | `orientation`, `textAlign`, `flexItem`. |
| `List`, `ListItem`, `ListItemIcon`, `ListItemText` | Compose navigation menus or data groupings. |
| `Typography` | Typography variants (`h1`…`overline`) that respect Goblin spacing and letter-spacing. |
| `Table`, `TableHead`, `TableRow`, `TableCell`, `TableBody` | Accessible table building blocks. |

## Example: annotated list

```tsx
import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from 'pkg-fe-react-goblin-system/components'

const contributors = [
  { name: 'Ada Lovelace', role: 'Design systems strategist', color: 'secondary' },
  { name: 'Alan Turing', role: 'DX engineer', color: 'info' },
  { name: 'Grace Hopper', role: 'Runtime architect', color: 'success' },
]

export function ContributorsList() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Maintainers
      </Typography>
      <List sx={{ width: '100%', maxWidth: 560 }}>
        {contributors.map((person, index) => (
          <ListItem key={person.name} divider={index < contributors.length - 1}>
            <ListItemIcon>
              <Avatar color={person.color}>{person.name.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={person.name} secondary={person.role} />
            <Chip label="Available" color={person.color} variant="outlined" />
          </ListItem>
        ))}
      </List>
      <Divider textAlign="left" sx={{ marginBlockStart: 3 }}>
        <Typography variant="overline">Need help?</Typography>
      </Divider>
      <Typography variant="body2" color="textSecondary">
        Reach out on GitHub discussions to request new components or tokens.
      </Typography>
    </>
  )
}
```

## Tips

- Combine `Typography` with the `sx` prop to tweak alignment without overriding the base theme.
- `Chip` provides a `color="default"` option when you want neutral tags.
- Tables rely on native semantics; use `aria` attributes or caption tags as needed for accessibility.
