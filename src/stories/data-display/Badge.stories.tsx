import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Badge } from '../../components'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    badgeContent: 4,
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Basic: Story = {
  render: (args) => (
    <Badge {...args}>
      <Avatar>JS</Avatar>
    </Badge>
  ),
}
