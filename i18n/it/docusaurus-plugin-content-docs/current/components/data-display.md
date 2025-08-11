---
sidebar_position: 4
title: Data display
---

# Data display

Questi componenti comunicano stati, etichette e raccolte.  
Ereditano tipografia, spaziatura e colori dal tema corrente.

## Catalogo componenti

| Componente | Prop principali |
| --- | --- |
| `Avatar` | `variant`, `color`, `size`, badge opzionale. |
| `Badge` | `color`, `variant`, `max` per badge numerici. |
| `Chip` | `color`, `variant`, `onDelete`, `label`. |
| `Divider` | `orientation`, `textAlign`, `flexItem`. |
| `List`, `ListItem`, `ListItemIcon`, `ListItemText` | Per menu o gruppi di dati. |
| `Typography` | Varianti tipografiche (`h1`…`overline`) coerenti con Goblin. |
| `Table`, `TableHead`, `TableRow`, `TableCell`, `TableBody` | Blocchi per tabelle accessibili. |

## Esempio: lista annotata

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
  { name: 'Ada Lovelace', role: 'Stratega design system', color: 'secondary' },
  { name: 'Alan Turing', role: 'DX engineer', color: 'info' },
  { name: 'Grace Hopper', role: 'Architect runtime', color: 'success' },
]

export function ContributorsList() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Maintainer
      </Typography>
      <List sx={{ width: '100%', maxWidth: 560 }}>
        {contributors.map((person, index) => (
          <ListItem key={person.name} divider={index < contributors.length - 1}>
            <ListItemIcon>
              <Avatar color={person.color}>{person.name.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={person.name} secondary={person.role} />
            <Chip label="Disponibile" color={person.color} variant="outlined" />
          </ListItem>
        ))}
      </List>
      <Divider textAlign="left" sx={{ marginBlockStart: 3 }}>
        <Typography variant="overline">Serve aiuto?</Typography>
      </Divider>
      <Typography variant="body2" color="textSecondary">
        Apri una discussione su GitHub per richiedere nuovi componenti o token.
      </Typography>
    </>
  )
}
```

## Suggerimenti

- Combina `Typography` con `sx` per gestire allineamenti senza sovrascrivere il tema.
- `Chip` offre il colore `default` quando servono tag neutri.
- Le tabelle sfruttano la semantica nativa: aggiungi attributi ARIA o caption quando necessario per l'accessibilità.
