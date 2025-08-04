import type { ReactNode } from 'react'
import { Card, MetaLabel, Section, TagList, TagPill, TileGrid } from 'pkg-fe-react-goblin-system'

const STACK = [
  {
    label: 'Buttons & Links',
    title: 'Actions with tone',
    description: 'SurfaceButton, PillButton, IconButton, ActionLink and TextLink cover accents, density and inline stories.',
    tags: ['SurfaceButton', 'PillButton', 'ActionLink'],
  },
  {
    label: 'Layout',
    title: 'Cards & Sections',
    description: 'Card variants, Section scaffolding and TagList/Pill combos keep spacing consistent across pages.',
    tags: ['Card', 'Section', 'TagList'],
  },
  {
    label: 'Metadata & Overlays',
    title: 'Ambient layers',
    description: 'MetaLabel, Backdrop, MenuSurface and Modal primitives extend the glow to dialogs and menus.',
    tags: ['MetaLabel', 'MenuSurface', 'Modal'],
  },
  {
    label: 'Site shell',
    title: 'Header & Footer',
    description: 'Locale switcher, accent picker and footer rails ship with the kit so documentation mirrors the real shell.',
    tags: ['Header', 'Footer'],
  },
]

export default function SystemStack(): ReactNode {
  return (
    <Section
      id="stack"
      accent="System map"
      description="Import the whole stack or cherry-pick atoms per project—everything stays in sync."
      subtle
    >
      <TileGrid $min="240px">
        {STACK.map((item) => (
          <Card key={item.label}>
            <MetaLabel $variant="badge" $tone="accent">
              {item.label}
            </MetaLabel>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <TagList>
              {item.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </TagList>
          </Card>
        ))}
      </TileGrid>
    </Section>
  )
}
