---
sidebar_position: 1
slug: /
title: Welcome
---

# Goblin System Design Language

Goblin System is a boutique React design system that powers the portfolio experience behind this repository.  
It packages a cohesive group of foundations, layout primitives, and production-ready components that all speak the same theme contract.

## What makes it different?

- **Dark-first foundations**  
  The default theme embraces a cinematic dark surface with an ochre secondary accent. Fluorescent secondary swatches are only a click away inside the docs header.
- **One source of truth**  
  `createGoblinTheme` generates palette, typography, spacing, mixins, transitions, shadows, and breakpoints that every component consumes via `styled-components`.
- **Storybook parity**  
  Every documented pattern links to a live Storybook story so you can inspect real implementations and play with props.
- **TypeScript-first authoring**  
  The public API ships with declaration files, discriminated unions for variants, and strongly typed `sx` helpers.
- **Framework agnostic**  
  No routing, state management, or form baggage—drop the kit into any React or Vite project and start composing.

## Contents at a glance

| Domain | Highlights |
| --- | --- |
| Foundations | `createGoblinTheme`, `GoblinThemeProvider`, `CssBaseline`, icon sprites, global styles |
| Layout | `Container`, `Stack`, responsive `Grid`, image lists |
| Data display | `Avatar`, `Badge`, `Chip`, `List`, `Table`, `Typography` |
| Inputs | Buttons, `Autocomplete`, `Select`, `Slider`, `TextField` and toggles |
| Feedback & overlays | `Alert`, `Dialog` suite, `Snackbar`, progress indicators, `Tooltip` |
| Navigation | `AppBar`, `Drawer`, `Tabs`, `Pagination`, `Stepper`, `SpeedDial` |
| Surfaces & utilities | `Card` family, `Accordion`, `Paper`, `Modal`, `Popover`, `Portal` |

Use the navigation menu to explore each area in more detail, or jump straight to the [Getting Started](./getting-started.md) guide.
