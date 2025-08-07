import {Meta, StoryObj} from '@storybook/react'

import { Switch } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Switch,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Basic: Story = {
  args: {
    checked: true,
  },
}