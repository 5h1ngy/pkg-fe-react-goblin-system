import type { Meta, StoryObj } from '@storybook/react'

import { Toolbar, Typography } from '../../components'

const meta: Meta<typeof Toolbar> = {
  title: 'Navigation/Toolbar',
  component: Toolbar,
}

export default meta
type Story = StoryObj<typeof Toolbar>

export const Basic: Story = {
  render: (args) => (
    <Toolbar {...args} style={{ justifyContent: 'space-between' }}>
      <Typography variant="h6">Logo</Typography>
      <Typography variant="body2">Links</Typography>
    </Toolbar>
  ),
}
