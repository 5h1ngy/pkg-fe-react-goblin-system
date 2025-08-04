---
sidebar_position: 4
title: Metadata & Tags
---

Use these primitives to sprinkle context around hero cards and resume-like sections.

## MetaLabel

```tsx
import { MetaLabel } from 'pkg-fe-react-goblin-system'

<MetaLabel $variant="badge" $tone="accent">
  shipped in 2024
</MetaLabel>
```

Variants:

- `eyebrow` – uppercase label for section headings.
- `badge` – pill with border, accepts `$padding`.
- `counter` – monospace-like tracking for numbers or totals.

Tones: `'default'`, `'muted'`, `'accent'`.

## TagList + TagPill

```tsx
import { TagList, TagPill } from 'pkg-fe-react-goblin-system'

<TagList>
  <TagPill>Motion</TagPill>
  <TagPill>Design Systems</TagPill>
  <TagPill>DX</TagPill>
</TagList>
```

- `TagList` is a flex wrapper with wrap support and optional `$gap` / `$justify`.
- `TagPill` is a lightweight component that renders a bordered capsule.

## VisuallyHidden

Wrap labels for icon-only buttons or stats to keep them screen-reader friendly:

```tsx
<button>
  <span aria-hidden>👀</span>
  <VisuallyHidden>Peek at preview</VisuallyHidden>
</button>
```
