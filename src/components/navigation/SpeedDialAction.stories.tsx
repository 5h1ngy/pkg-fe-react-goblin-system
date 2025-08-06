import type { Meta, StoryObj } from '@storybook/react'

import { SpeedDialAction } from '../../components'
import { MailIcon } from '../../foundations'

const meta: Meta<typeof SpeedDialAction> = {
  title: 'Navigation/SpeedDialAction',
  component: SpeedDialAction,
  args: {
    icon: <MailIcon aria-hidden />,
    tooltipTitle: 'Compose',
  },
}

export default meta
type Story = StoryObj<typeof SpeedDialAction>

export const Basic: Story = {}
