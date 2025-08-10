import { Meta, StoryObj } from '@storybook/react'

import { Paper, Typography } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Paper> = {
  title: 'Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Paper,
      },
    },
  },
  args: {
    elevation: 2,
  },
}

export default meta
type Story = StoryObj<typeof Paper>

export const Basic: Story = {
  render: (args) => (
    <Paper {...args}>
      <Typography variant="h6">Paper component</Typography>
      <Typography variant="body2">Useful for simple surfaces and containers.</Typography>
    </Paper>
  ),
}
