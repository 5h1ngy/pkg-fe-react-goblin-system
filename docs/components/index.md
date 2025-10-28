---
sidebar_position: 1
title: Components Overview
---

# Components Overview

Goblin System components are organised by intent, not by visual style.  
Every primitive is powered by the shared theme contract and exposes an `sx` prop for fine-grained control.

## Component families

| Category | Highlights |
| --- | --- |
| [Foundations](./foundations.md) | Theme provider, global styles, icon set, and helper hooks. |
| [Layout](./layout.md) | `Container`, `Stack`, responsive `Grid`, image lists. |
| [Data display](./data-display.md) | `Avatar`, `Badge`, `Chip`, `List`, `Table`, `Typography`. |
| [Inputs & controls](./inputs.md) | Button set, toggles, selectors, text inputs. |
| [Feedback & overlays](./feedback.md) | Alerts, dialogs, snackbar, progress indicators, `Tooltip`. |
| [Navigation](./navigation.md) | App bars, drawers, menus, pagination, steppers, tabs. |
| [Utilities & portals](./utilities.md) | Collapse, modal, popover, portal utilities. |

Each detail page lists the most important components in that family, including usage guidelines and links to Storybook stories.

## Component anatomy

Most components follow the same conventions:

- **Variant props** with `$` prefix (e.g. `$variant`, `$interactive`) to avoid collisions.
- **`color` props** respecting palette keys (`primary`, `secondary`, `info`, `success`, `warning`, `error`).
- **`sx` prop** to feed theme-aware style objects or functions.
- **Forwarded refs** so you can integrate with form libraries, `react-hook-form`, or custom animations.

## Keep Storybook close

The fastest way to explore behaviour is to open Storybook from the header.  
You can then copy/paste code snippets directly into your application while the documentation stays focused on design and architecture guidelines.
