import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Modal } from '../../components'

const meta: Meta<typeof Modal> = {
  title: 'Utils/Modal',
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>Modal body content.</p>
        </Modal>
      </>
    )
  },
}

