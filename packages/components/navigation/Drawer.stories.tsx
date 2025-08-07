import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { Drawer, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Drawer,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Temporary: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: '1rem' }}>
            <Typography variant="h6">Navigation</Typography>
            <Typography variant="body2">Drawer content goes here.</Typography>
          </div>
        </Drawer>
      </>
    )
  },
}