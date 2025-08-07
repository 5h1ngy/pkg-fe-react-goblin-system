import {Meta, StoryObj} from '@storybook/react'

import { SpeedDialAction } from '../../components'
import { MailIcon } from '../../foundations'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof SpeedDialAction> = {
  title: 'Navigation/SpeedDialAction',
  component: SpeedDialAction,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.SpeedDialAction,
      },
    },
  },
  args: {
    icon: <MailIcon aria-hidden />,
    tooltipTitle: 'Compose',
  },
}

export default meta
type Story = StoryObj<typeof SpeedDialAction>

export const Basic: Story = {}