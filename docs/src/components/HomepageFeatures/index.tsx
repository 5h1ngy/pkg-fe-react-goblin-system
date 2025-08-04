import type { ReactNode } from 'react'
import { Card, MetaLabel, Section, TagList, TagPill, TileGrid } from 'pkg-fe-react-goblin-system'

const FeatureList = [
  {
    label: 'Theme synced',
    title: 'Portfolio fidelity',
    description:
      'Gradients, fog layers and ambient shadows come from the same theme helper, so docs and Storybook always match.',
    tags: ['Fog layers', 'Ambient shadows', 'Accent tokens'],
    variant: 'gradient' as const,
  },
  {
    label: 'Composable atoms',
    title: 'Shared primitives',
    description:
      'Cards, Sections, overlays and tags live in one shared folder—mix them to build narrative case studies in minutes.',
    tags: ['Cards', 'Sections', 'Tags'],
  },
  {
    label: 'DX ready',
    title: 'Docs + Storybook',
    description:
      'Documentation renders the same components that Storybook controls, keeping tone switches, accents and density aligned.',
    tags: ['Live examples', 'MDX shortcodes', 'Story controls'],
  },
]

export default function HomepageFeatures(): ReactNode {
  return (
    <Section
      id="features"
      title="Inside the toolkit"
      description="Every block reuses the exact React components that power the portfolio hero."
      subtle
    >
      <TileGrid $min="260px">
        {FeatureList.map((feature) => (
          <Card key={feature.title} $variant={feature.variant ?? 'surface'} $interactive>
            <MetaLabel $variant="badge" $tone="accent">
              {feature.label}
            </MetaLabel>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <TagList>
              {feature.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </TagList>
          </Card>
        ))}
      </TileGrid>
    </Section>
  )
}
