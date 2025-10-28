---
sidebar_position: 5
title: Inputs & Controls
---

# Inputs & Controls

Interactive components capture user intent and match the dark-first aesthetic of Goblin System.

## Component catalog

| Component | Highlights |
| --- | --- |
| `Button`, `IconButton`, `ButtonGroup`, `ToggleButton`, `ToggleButtonGroup` | Multiple density and variant options (contained, outlined, text). |
| `Autocomplete`, `Select`, `TransferList` | Form-friendly selectors with async-ready props. |
| `Checkbox`, `Radio`, `Switch` | Grouped controls with focus states tuned for dark UI. |
| `Slider`, `Rating` | Accessible input ranges with keyboard support. |
| `TextField` | Supports `multiline`, adornments, error states, helper text, and full-width layouts. |
| `Fab` | Floating action button with accent-aware glow. |

## Example: filter toolbar

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

const categories = ['Case studies', 'Motion', 'Branding', 'Dev tooling']

export function FilterToolbar() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
      <Autocomplete
        options={categories}
        renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
        sx={{ minWidth: 240 }}
      />
      <Stack direction="row" spacing={1} alignItems="center" flex={1}>
        <Slider
          valueLabelDisplay="auto"
          aria-label="Project count"
          defaultValue={12}
          step={1}
          marks
          min={4}
          max={24}
        />
        <IconButton aria-label="Add filter">
          <AddIcon size={18} />
        </IconButton>
      </Stack>
      <ButtonGroup variant="contained" color="secondary">
        <Button startIcon={<MoreHorizIcon size={16} />}>More options</Button>
        <Button>Apply</Button>
      </ButtonGroup>
    </Stack>
  )
}
```

## Tips

- `TextField` exposes `startAdornment` and `endAdornment` slots through the `InputField` primitives; pass icons to align them seamlessly.
- Use `color="secondary"` for primary calls-to-action. Rotate to the fluorescent palette via the header pickers if you need extra punch.
- Combine `ButtonGroup` with `ToggleButtonGroup` to offer segmented controls.
