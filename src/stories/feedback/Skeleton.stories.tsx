import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../../components'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: {
    variant: 'text',
    width: '50%',
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 180,
  },
}
