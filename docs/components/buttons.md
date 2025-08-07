---
sidebar_position: 2
title: Buttons & Links
---

The button primitives live in `src/components/shared/Button.tsx` and cover CTAs, icon-only triggers and pill toggles.

## SurfaceButton

```tsx
import { SurfaceButton } from 'pkg-fe-react-goblin-system'

<SurfaceButton $tone="accent">
  Launch Case Study
</SurfaceButton>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `$tone` | `'surface' \| 'muted' \| 'accent' \| 'ghost'` | `surface` | Controls fill, borders and shadow. |
| `$padding` | `string` | `0.5rem 1rem` | Custom density. |
| `$radius` | `string` | `14px` | Use `999px` for full pill. |
| `$uppercase` | `boolean` | `false` | Enables uppercase label + tracking. |

## IconButton

```tsx
import { IconButton } from 'pkg-fe-react-goblin-system'
import { ArrowIcon } from 'pkg-fe-react-goblin-system/styles'

<IconButton aria-label="Next project" $tone="muted">
  <ArrowIcon />
</IconButton>
```

| Prop | Type | Default |
| --- | --- | --- |
| `$size` | `'sm' \| 'md' \| 'lg'` | `md` |
| `$shape` | `'circle' \| 'rounded'` | `circle` |

## PillButton

Optimized for filters or stacked tabs.

```tsx
<PillButton $tone="ghost" $dense>
  Archive
</PillButton>
```

Set `$dense` to shrink both the padding and font-size.

## Links

`ActionLink` and `TextLink` ship in their own files and share the same accent hover treatment. Use `ActionLink` when you need inline icons or a pill outline, and `TextLink` for subtle inline references within copy.
