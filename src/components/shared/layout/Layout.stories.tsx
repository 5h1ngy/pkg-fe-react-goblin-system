import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Section } from './Section'
import { ScreenLoader } from './ScreenLoader'
import { MetaLabel } from '../metadata/MetaLabel'
import { TagList } from '../metadata/TagList'
import { TagPill } from '../metadata/TagPill'

const meta: Meta<typeof Card> = {
  title: 'shared/layout',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    children: 'Card content',
  },
  subcomponents: { ScreenLoader },
}

export default meta

type Story = StoryObj<typeof Card>
type LoaderStory = StoryObj<typeof ScreenLoader>

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <Card>
        <MetaLabel $variant="eyebrow" $tone="accent">
          Surface
        </MetaLabel>
        <p>A calm elevated surface for dense layouts.</p>
      </Card>
      <Card $variant="muted">
        <MetaLabel $variant="eyebrow">Muted</MetaLabel>
        <p>Soft neutral tone for grouping inputs or metadata.</p>
      </Card>
      <Card $variant="gradient">
        <MetaLabel $variant="eyebrow">Gradient</MetaLabel>
        <p>Hero ready background with dramatic depth.</p>
      </Card>
    </div>
  ),
}

export const SectionShowcase: Story = {
  render: () => (
    <Section
      id="skills"
      title="Capabilities"
      description="Composable building blocks for any portfolio section."
      subtle
    >
      <Card $interactive>
        <MetaLabel $variant="badge" $tone="accent">
          Overview
        </MetaLabel>
        <p>
          Blend cards, badges and tag lists to communicate experience and stack in a single glance.
        </p>
        <TagList>
          <TagPill>Design Systems</TagPill>
          <TagPill>Motion</TagPill>
          <TagPill>DX Tooling</TagPill>
        </TagList>
      </Card>
    </Section>
  ),
}

export const ScreenLoaderShowcase: LoaderStory = {
  args: {
    isVisible: true,
    progress: 0.72,
    label: 'Preparing the experience',
    progressLabel: 'Loader progress',
    accentColor: '#00c8ff',
  },
  render: (args) => (
    <div style={{ minHeight: '480px', position: 'relative' }}>
      <ScreenLoader {...args} formatPercent={(value) => `${value}% tuned`} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
