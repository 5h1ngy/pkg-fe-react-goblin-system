---
sidebar_position: 3
title: Layout
---

# Layout

Le primitive di layout governano spaziature, allineamenti e breakpoint responsivi.  
Seguono la scala di spaziatura e il set di breakpoint definiti nel tema.

## Componenti

| Componente | Descrizione |
| --- | --- |
| `Container` | Centra i contenuti con opzioni `maxWidth`, `disableGutters`, `fixed`. |
| `Stack` | Stack flessibile orizzontale/verticale con supporto a divider e `sx` responsivo. |
| `Grid` | Astrazione CSS Grid con gap e colonne allineate ai breakpoint di Goblin. |
| `ImageList`, `ImageListItem`, `ImageListItemBar` | Galleria di media con didascalia sovrapposta. |
| `Box` | Wrapper polimorfo che accetta `sx` e può rendere qualsiasi elemento HTML. |

## Esempio: sezione responsive

```tsx
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
} from 'pkg-fe-react-goblin-system/components'

export function FeatureGrid() {
  return (
    <Box component="section" sx={(theme) => ({ paddingBlock: theme.spacing(8) })}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Typography variant="h3">Perché scegliere Goblin System</Typography>
          <Grid container spacing={3}>
            {['Token orientati al dark mode', 'Accessibilità integrata', 'API componibili'].map((headline) => (
              <Grid item xs={12} md={4} key={headline}>
                <Card $variant="outlined">
                  <CardContent>
                    <Typography variant="h5">{headline}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Crea interfacce narrative più velocemente con superfici, motion e controlli di tono pronti.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}
```

## Suggerimenti

- `Stack` supporta le prop `component`, `direction`, `spacing` per adattarsi a qualsiasi elemento.
- `Container` utilizza `theme.breakpoints.values`; modifica questi valori per cambiare la larghezza globale.
- Usa `Box` come wrapper utility quando ti serve comportamento polimorfo più la prop `sx`.
