import { Meta, StoryObj } from '@storybook/react'

import { Toolbar, Typography } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Toolbar> = {
  title: 'Navigation/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Toolbar,
      },
    },
  },
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
