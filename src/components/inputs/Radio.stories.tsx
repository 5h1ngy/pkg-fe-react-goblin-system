import {Meta, StoryObj} from '@storybook/react'

import { Radio } from '../../components'

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  args: {
    value: 'option',
    name: 'radio-demo',
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}
