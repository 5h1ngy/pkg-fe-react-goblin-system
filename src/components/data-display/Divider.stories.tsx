import type { Meta, StoryObj } from '@storybook/react'

import { Divider, Typography } from '../../components'

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div>
      <Typography variant="h6">Section A</Typography>
      <Divider />
      <Typography variant="body2">Content separated by a divider.</Typography>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography>Item One</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Item Two</Typography>
    </div>
  ),
}
