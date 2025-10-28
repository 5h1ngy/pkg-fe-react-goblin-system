import { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogContent } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof DialogContent> = {
  title: 'Feedback/DialogContent',
  component: DialogContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.DialogContent,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DialogContent>

export const Basic: Story = {
  render: (args) => (
    <Dialog open onClose={() => undefined}>
      <DialogContent {...args} />
    </Dialog>
  ),
  args: {
    children: 'Dialog body content.',
  },
}
