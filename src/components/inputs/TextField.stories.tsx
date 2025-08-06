import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '../../components'

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Outlined: Story = {}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
}

export const Multiline: Story = {
  args: {
    multiline: true,
    rows: 4,
    placeholder: 'Describe your project...',
  },
}
