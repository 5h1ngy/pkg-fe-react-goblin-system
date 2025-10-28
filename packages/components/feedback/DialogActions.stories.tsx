import { Meta, StoryObj } from '@storybook/react'

import { Button, Dialog, DialogActions } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof DialogActions> = {
  title: 'Feedback/DialogActions',
  component: DialogActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.DialogActions,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DialogActions>

export const Basic: Story = {
  render: (args) => (
    <Dialog open onClose={() => undefined}>
      <DialogActions {...args}>
        <Button variant="text">Cancel</Button>
        <Button variant="text">Ok</Button>
      </DialogActions>
    </Dialog>
  ),
}
