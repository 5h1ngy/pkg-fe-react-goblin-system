import { Meta, StoryObj } from '@storybook/react'

import { LinearProgress } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof LinearProgress> = {
  title: 'Feedback/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.LinearProgress,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof LinearProgress>

export const Indeterminate: Story = {}

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 60,
  },
}
