import { Meta, StoryObj } from '@storybook/react'

import { Tooltip, Button } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Tooltip,
      },
    },
  },
  args: {
    title: 'Tooltip text',
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="text">Hover me</Button>
    </Tooltip>
  ),
}
