import type { Meta, StoryObj } from '@storybook/react'

import { AppBar, Toolbar, Typography } from '../../components'

const meta: Meta<typeof AppBar> = {
  title: 'Navigation/AppBar',
  component: AppBar,
}

export default meta
type Story = StoryObj<typeof AppBar>

export const Basic: Story = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Brand</Typography>
        <Typography variant="body2">Actions</Typography>
      </Toolbar>
    </AppBar>
  ),
}
