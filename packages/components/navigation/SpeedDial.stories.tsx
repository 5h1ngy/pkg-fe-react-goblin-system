import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { SpeedDial, SpeedDialAction } from '../../components'
import { AddIcon, MailIcon, PhoneIcon } from '../../foundations'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof SpeedDial> = {
  title: 'Navigation/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.SpeedDial,
      },
    },
  },
  args: {
    icon: <AddIcon aria-hidden />,
    ariaLabel: 'Speed dial',
  },
}

export default meta
type Story = StoryObj<typeof SpeedDial>

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <SpeedDial {...args} open={open} defaultOpen={false} onClick={() => setOpen((prev) => !prev)}>
        <SpeedDialAction icon={<MailIcon aria-hidden />} tooltipTitle="Email" />
        <SpeedDialAction icon={<PhoneIcon aria-hidden />} tooltipTitle="Call" />
      </SpeedDial>
    )
  },
}
