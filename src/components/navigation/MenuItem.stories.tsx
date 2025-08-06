import type { Meta, StoryObj } from '@storybook/react'

import { MenuItem } from '../../components'

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  args: {
    children: 'Menu item',
  },
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Basic: Story = {}
