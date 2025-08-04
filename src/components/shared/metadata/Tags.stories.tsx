import type { Meta, StoryObj } from '@storybook/react'

import { MetaLabel } from './MetaLabel'
import { TagList } from './TagList'
import { TagPill } from './TagPill'
import { VisuallyHidden } from './VisuallyHidden'

const meta: Meta<typeof MetaLabel> = {
  title: 'shared/metadata',
  component: MetaLabel,
  args: {
    children: 'Meta label',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MetaLabel>

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <MetaLabel $variant="eyebrow" $tone="accent">
        Eyebrow
      </MetaLabel>
      <MetaLabel $variant="badge">Badge</MetaLabel>
      <MetaLabel $variant="counter" $tone="muted">
        12 Projects
      </MetaLabel>
    </div>
  ),
}

export const TagListShowcase: Story = {
  render: () => (
    <TagList>
      <TagPill>React</TagPill>
      <TagPill>Styled Components</TagPill>
      <TagPill>Motion</TagPill>
      <TagPill>DX</TagPill>
    </TagList>
  ),
}

export const VisuallyHiddenExample: Story = {
  render: () => (
    <button style={{ position: 'relative' }}>
      <span aria-hidden>🔔</span>
      <VisuallyHidden>Notifications</VisuallyHidden>
    </button>
  ),
}
