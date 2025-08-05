import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuItem } from '../../components'

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
}

export default meta
type Story = StoryObj<typeof Menu>

export const Basic: Story = {
  render: () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)
    return (
      <>
        <button ref={buttonRef} onClick={() => setOpen(true)}>
          Open Menu
        </button>
        <Menu anchorEl={buttonRef.current} open={open} onClose={() => setOpen(false)}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </>
    )
  },
}
