import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Button, Collapse, Typography } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Collapse> = {
  title: 'Utils/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Collapse,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapse>

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <div>
        <Button variant="text" onClick={() => setOpen((prev) => !prev)}>
          Toggle
        </Button>
        <Collapse {...args} in={open}>
          <Typography variant="body2">Collapsible content</Typography>
        </Collapse>
      </div>
    )
  },
}
