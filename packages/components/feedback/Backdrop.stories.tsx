import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Backdrop, Button } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Backdrop> = {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Backdrop,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Backdrop>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button variant="text" onClick={() => setOpen(true)}>
          Show Backdrop
        </Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div style={{ color: '#fff' }}>Backdrop content</div>
        </Backdrop>
      </>
    )
  },
}
