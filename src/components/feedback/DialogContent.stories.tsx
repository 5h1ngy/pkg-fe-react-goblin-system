import {Meta, StoryObj} from '@storybook/react'

import { Dialog, DialogContent } from '../../components'

const meta: Meta<typeof DialogContent> = {
  title: 'Feedback/DialogContent',
  component: DialogContent,
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
