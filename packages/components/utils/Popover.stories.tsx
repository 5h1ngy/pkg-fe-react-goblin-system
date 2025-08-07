import { useRef, useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { Button, Popover } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Popover> = {
  title: 'Utils/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Popover,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Basic: Story = {
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button ref={anchorRef} onClick={() => setOpen((prev) => !prev)}>
          Toggle Popover
        </Button>
        <Popover anchorEl={anchorRef.current} open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: '1rem' }}>Popover content</div>
        </Popover>
      </>
    )
  },
}