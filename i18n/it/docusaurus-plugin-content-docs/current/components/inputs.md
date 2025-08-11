---
sidebar_position: 5
title: Input e controlli
---

# Input e controlli

I componenti interattivi raccolgono l'intento dell'utente mantenendo l'estetica neon-first di Goblin.

## Catalogo componenti

| Componente | Caratteristiche |
| --- | --- |
| `Button`, `IconButton`, `ButtonGroup`, `ToggleButton`, `ToggleButtonGroup` | Varianti contained, outlined, text, con density ottimizzate. |
| `Autocomplete`, `Select`, `TransferList` | Selettori orientati ai form, pronti per sorgenti asincrone. |
| `Checkbox`, `Radio`, `Switch` | Controlli di gruppo con focus state ottimizzati per dark UI. |
| `Slider`, `Rating` | Input a intervallo con pieno supporto tastiera. |
| `TextField` | Supporta `multiline`, adornment, stati di errore, helper text, layout full-width. |
| `Fab` | Floating action button con alone d'accento. |

## Esempio: barra filtri

```tsx
import {
  Autocomplete,
  Button,
  ButtonGroup,
  IconButton,
  Slider,
  Stack,
  TextField,
} from 'pkg-fe-react-goblin-system/components'
import { AddIcon, MoreHorizIcon } from 'pkg-fe-react-goblin-system'

const categories = ['Case study', 'Motion', 'Branding', 'Tooling']

export function FilterToolbar() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
      <Autocomplete
        options={categories}
        renderInput={(params) => <TextField {...params} label="Categoria" variant="outlined" />}
        sx={{ minWidth: 240 }}
      />
      <Stack direction="row" spacing={1} alignItems="center" flex={1}>
        <Slider
          valueLabelDisplay="auto"
          aria-label="Numero di progetti"
          defaultValue={12}
          step={1}
          marks
          min={4}
          max={24}
        />
        <IconButton aria-label="Aggiungi filtro">
          <AddIcon size={18} />
        </IconButton>
      </Stack>
      <ButtonGroup variant="contained" color="secondary">
        <Button startIcon={<MoreHorizIcon size={16} />}>Opzioni</Button>
        <Button>Applica</Button>
      </ButtonGroup>
    </Stack>
  )
}
```

## Suggerimenti

- `TextField` espone `startAdornment` ed `endAdornment` tramite le primitive `InputField`: passa icone per allinearle correttamente.
- Usa `color="secondary"` per le call-to-action principali. Con i selettori dell'header puoi ruotare l'accento su palette fluorescenti.
- Combina `ButtonGroup` con `ToggleButtonGroup` per offrire controlli segmentati.
