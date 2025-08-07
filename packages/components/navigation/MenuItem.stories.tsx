import {Meta, StoryObj} from '@storybook/react'

import { MenuItem } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.MenuItem,
      },
    },
  },
  args: {
    children: 'Menu item',
  },
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Basic: Story = {}