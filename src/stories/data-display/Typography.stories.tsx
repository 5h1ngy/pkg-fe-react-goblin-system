import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../../components'

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  args: {
    children: 'Typography sample',
    variant: 'h6',
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading: Story = {}

export const Body: Story = {
  args: {
    variant: 'body1',
  },
}
