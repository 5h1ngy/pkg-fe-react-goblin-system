import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button, ClickAwayListener, Collapse, Modal, Popover, Typography } from '../components'

const meta: Meta = {
  title: 'Utils/Overview',
  component: Collapse,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <Button onClick={() => setOpen((prev) => !prev)}>Toggle Collapse</Button>
            <Collapse in={open}>
              <Typography sx={{ padding: 1 }}>This content collapses.</Typography>
            </Collapse>
          </div>
        </ClickAwayListener>

        <div>
          <Button onClick={(event) => setPopoverAnchor(event.currentTarget)}>Open Popover</Button>
          <Popover open={Boolean(popoverAnchor)} anchorEl={popoverAnchor} onClose={() => setPopoverAnchor(null)}>
            <div style={{ padding: '1rem' }}>Popover content</div>
          </Popover>
        </div>

        <Modal open={false}>
          <Typography>Modal content</Typography>
        </Modal>
      </div>
    )
  },
}

