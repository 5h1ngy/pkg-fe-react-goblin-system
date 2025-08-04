import type { Meta, StoryObj } from '@storybook/react'

import { ArrowIcon } from '@/styles'

import { ActionLink } from './ActionLink'
import { SurfaceButton, IconButton, PillButton } from './Button'
import { TextLink } from './TextLink'

const meta: Meta<typeof SurfaceButton> = {
  title: 'shared/buttons',
  component: SurfaceButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Surface button',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SurfaceButton>

export const Surface: Story = {}

export const Accent: Story = {
  args: {
    children: 'Accent action',
    $tone: 'accent',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost action',
    $tone: 'ghost',
  },
}

export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton aria-label="Open navigation" $tone="surface">
        <ArrowIcon />
      </IconButton>
      <IconButton aria-label="Toggle theme" $tone="muted" $shape="rounded">
        <ArrowIcon />
      </IconButton>
    </div>
  ),
}

export const PillButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <PillButton>Default</PillButton>
      <PillButton $tone="accent">Accent</PillButton>
      <PillButton $tone="muted" $dense>
        Dense
      </PillButton>
    </div>
  ),
}

export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ActionLink href="#">
        Open Case Study
        <ArrowIcon />
      </ActionLink>
      <TextLink href="#">Read more</TextLink>
    </div>
  ),
}
