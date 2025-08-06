import type { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogTitle } from '../../components'

const meta: Meta<typeof DialogTitle> = {
  title: 'Feedback/DialogTitle',
  component: DialogTitle,
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
