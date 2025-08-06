import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { ClickAwayListener } from '../../components'

const meta: Meta<typeof ClickAwayListener> = {
  title: 'Utils/ClickAwayListener',
  component: ClickAwayListener,
}

export default meta
type Story = StoryObj<typeof ClickAwayListener>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div
          style={{
            padding: '1rem',
            background: open ? '#e3f2fd' : '#f5f5f5',
            borderRadius: '0.5rem',
          }}
        >
          {open ? 'Click outside me' : 'Closed'}
        </div>
      </ClickAwayListener>
    )
  },
}
