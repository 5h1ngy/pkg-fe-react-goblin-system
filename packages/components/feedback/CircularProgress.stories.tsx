import { Meta, StoryObj } from '@storybook/react'

import { CircularProgress } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.CircularProgress,
      },
    },
  },
  args: {
    color: 'primary',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}

export default meta
type Story = StoryObj<typeof CircularProgress>

export const Indeterminate: Story = {}

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 65,
  },
}
