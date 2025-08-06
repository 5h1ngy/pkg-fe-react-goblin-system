import {Meta, StoryObj} from '@storybook/react'

import { LinearProgress } from '../../components'

const meta: Meta<typeof LinearProgress> = {
  title: 'Feedback/LinearProgress',
  component: LinearProgress,
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
