import {Meta, StoryObj} from '@storybook/react'

import { Dialog, DialogTitle } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof DialogTitle> = {
  title: 'Feedback/DialogTitle',
  component: DialogTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.DialogTitle,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DialogTitle>

export const Basic: Story = {
  render: (args) => (
    <Dialog open onClose={() => undefined}>
      <DialogTitle {...args} />
    </Dialog>
  ),
  args: {
    children: 'Dialog heading',
  },
}