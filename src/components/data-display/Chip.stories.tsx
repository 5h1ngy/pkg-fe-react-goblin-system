import {Meta, StoryObj} from '@storybook/react'

import { Chip } from '../../components'

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  args: {
    label: 'Active',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Filled: Story = {}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}
