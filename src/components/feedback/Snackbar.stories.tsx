import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { Button, Snackbar } from '../../components'

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
}

export default meta
type Story = StoryObj<typeof Snackbar>

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    )
  },
  args: {
    message: 'Saved successfully',
  },
}
