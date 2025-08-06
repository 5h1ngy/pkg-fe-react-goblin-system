import {Meta, StoryObj} from '@storybook/react'

import { Switch } from '../../components'

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Basic: Story = {
  args: {
    checked: true,
  },
}
