import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../../components'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {
  render: (args) => <Checkbox {...args} />,
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}
