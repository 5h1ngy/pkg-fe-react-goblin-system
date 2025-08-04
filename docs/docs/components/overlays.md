---
sidebar_position: 5
title: Overlays
---

Backdrop, Modal and MenuSurface provide the cinematic glow around dialogs and command menus.

## Backdrop

```tsx
import { Backdrop } from 'pkg-fe-react-goblin-system'

<Backdrop $visible $tone="light" />
```

| Prop | Type | Default |
| --- | --- | --- |
| `$tone` | `'light' \| 'dark'` | `light` |
| `$blur` | `string` | `blur(10px)` |
| `$zIndex` | `number` | `40` |
| `$visible` | `boolean` | `false` |

`tone` automatically adjusts based on the active theme mode.

## Modal shell

```tsx
import {
  ModalOverlay,
  ModalContainer,
  ModalScrollArea,
} from 'pkg-fe-react-goblin-system'

<ModalOverlay>
  <ModalContainer>
    <ModalScrollArea>
      {/* content */}
    </ModalScrollArea>
  </ModalContainer>
</ModalOverlay>
```

- `ModalOverlay` is a backdrop preset (always visible + centered layout).
- `ModalContainer` inherits `Card` styles and handles responsive sizing.
- `ModalScrollArea` provides the scrolling content region.

Bring your own close button and focus management—Storybook includes an example.

## MenuSurface

```tsx
import { MenuSurface, SurfaceButton } from 'pkg-fe-react-goblin-system'

<div style={{ position: 'relative' }}>
  <SurfaceButton onClick={toggle}>Open</SurfaceButton>
  <MenuSurface $open={open}>
    <SurfaceButton as="a">Case studies</SurfaceButton>
    <SurfaceButton as="a" $tone="muted">Process</SurfaceButton>
  </MenuSurface>
</div>
```

The surface ties its opacity, transform and pointer-events to `$open` and uses the same border/shadow scale as `Card`.
