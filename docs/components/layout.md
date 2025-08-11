---
sidebar_position: 3
title: Layout
---

# Layout

Layout primitives control spacing, alignment, and responsive breakpoints.  
They mirror the underlying theme spacing scale and breakpoint values.

## Components

| Component | Description |
| --- | --- |
| `Container` | Centers content with optional `maxWidth`, `disableGutters`, and `fixed` props. |
| `Stack` | Flexbox-based stack supporting horizontal/vertical layouts, dividers, and responsive `sx`. |
| `Grid` | CSS grid abstraction with gap + column helpers aligned with Goblin breakpoints. |
| `ImageList`, `ImageListItem`, `ImageListItemBar` | Media gallery with overlay captions. |
| `Box` | Polymorphic wrapper that accepts an `sx` prop and renders any element type. |

## Example: responsive section

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
          <Typography variant="h3">Why teams adopt Goblin System</Typography>
          <Grid container spacing={3}>
            {['Dark-first tokens', 'Accessible defaults', 'Composable APIs'].map((headline) => (
              <Grid item xs={12} md={4} key={headline}>
                <Card $variant="outlined">
                  <CardContent>
                    <Typography variant="h5">{headline}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Build narrative interfaces faster with ready-made surfaces, motion, and tone controls.
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

## Tips

- `Stack` accepts `component`, `direction`, and `spacing` props so you can align it with any HTML element.
- `Container` internally uses `theme.breakpoints.values`; update them in the theme to change global widths.
- Use `Box` as a utility wrapper when you need polymorphic behaviour plus the `sx` prop.
