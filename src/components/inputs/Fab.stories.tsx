import type { Meta, StoryObj } from '@storybook/react'

import { Fab } from '../../components'

const meta: Meta<typeof Fab> = {
  title: 'Inputs/Fab',
  component: Fab,
  args: {
    color: 'secondary',
    children: '+',
  },
}

export default meta
type Story = StoryObj<typeof Fab>

export const Default: Story = {}

export const Large: Story = {
  args: {
    size: 'large',
  },
}
