import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Dialog,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogContent>
            <Typography variant="body2">Dialog content.</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}