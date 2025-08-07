---
sidebar_position: 1
---

# Components Overview

Goblin System ships a focused set of shared components. Every piece is theme-aware and designed to snap together for portfolio sections.  
The codebase mirrors the documentation: `src/components/shared/buttons`, `layout`, `metadata`, and `overlays` each host the assets for their respective chapters.

| Component | Description |
| --- | --- |
| `ActionLink`, `TextLink` | Inline actions with accent hover states. |
| `SurfaceButton`, `IconButton`, `PillButton` | Density-friendly call-to-actions with tone modifiers. |
| `Backdrop` | Blurred full-screen overlay that respects the current mode. |
| `Card` | Gradient/surface containers with interactive elevation. |
| `MenuSurface` | Floating surface for quick menus or command palettes. |
| `MetaLabel` | Eyebrow, badge or counter metadata. |
| `ModalOverlay`, `ModalContainer`, `ModalScrollArea` | Composable modal shell. |
| `Section` | Spacing + header scaffold used across the portfolio. |
| `ScreenLoader` | Full-viewport progress overlay with accent glow + progress bar. |
| `TagList`, `TagPill` | Responsive skill or stack metadata list. |
| `VisuallyHidden` | Accessibility helper for off-screen text. |
| `Header`, `Footer` | Portfolio shell with locale/theme controls and social links. |

Use the sub-pages to see code snippets and design guidance for each category:

- [Buttons & Links](./buttons.md)
- [Cards & Sections](./cards.md)
- [Metadata & Tags](./metadata.md)
- [Overlays](./overlays.md)
- [Header & Footer](./site-shell.md)
