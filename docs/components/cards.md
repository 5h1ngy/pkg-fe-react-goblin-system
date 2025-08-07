---
sidebar_position: 3
title: Cards & Sections
---

Cards, sections and layout helpers keep spacing consistent across portfolio chapters.

## Card

`Card` is a styled `<article>` that accepts three variants:

```tsx
import { Card } from 'pkg-fe-react-goblin-system'

<Card $variant="gradient" $interactive>
  <h3>DX Toolkit</h3>
  <p>Motion-led onboarding for API explorers.</p>
</Card>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `$variant` | `'surface' \| 'muted' \| 'gradient'` | `surface` | Gradient injects a diagonal color blend. |
| `$interactive` | `boolean` | `false` | Adds hover lift + accent border. |
| `$padding` | `string` | `1.4rem` | Custom internal spacing. |
| `$radius` | `string` | `22px` | Match Section wrappers if needed. |

## Section

`Section` wraps content with consistent rhythm, accent headings and optional `subtle` backgrounds.

```tsx
import { Section } from 'pkg-fe-react-goblin-system'

<Section
  id="process"
  title="Process"
  description="A repeatable flow from discovery to launch."
  subtle
>
  {children}
</Section>
```

Key props:

- `id` – anchors the section for the menu.
- `accent` or `title` – renders an uppercase heading.
- `description` – short supporting copy.
- `subtle` – adds a muted background with a bordered container.

Pair `Section` + `Card` + `TagList` to mirror the original portfolio layout.

## ScreenLoader

`ScreenLoader` is the full-viewport progress overlay used while case studies hydrate content. It borrows the same accent + surface tokens as `Card`, so it feels native to both light and dark modes.

```tsx
import { ScreenLoader } from 'pkg-fe-react-goblin-system'

<ScreenLoader
  isVisible
  progress={0.66}
  label="Booting the decks"
  progressLabel="Portfolio loading progress"
/>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `progress` | `number` | `0` | Accepts `0-1` or `0-100`, auto-normalized + clamped. |
| `isVisible` | `boolean` | `false` | Toggles the overlay, also controls `aria-hidden`. |
| `accentColor` | `string` | `theme.colors.accent` | Override the glow + pulse color. |
| `label` | `string` | `'Preparing the experience'` | Title shown above the progress bar. |
| `progressLabel` | `string` | `'Loading progress'` | `aria-label` for the internal progress bar. |
| `formatPercent` | `(percent: number) => string` | `(value) => \`${value}% ready\`` | Customize the percentage copy beneath the bar. |
