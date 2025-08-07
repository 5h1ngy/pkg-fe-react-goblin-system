import {Meta, StoryObj} from '@storybook/react'

import { TransferList } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof TransferList> = {
  title: 'Inputs/TransferList',
  component: TransferList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.TransferList,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TransferList>

export const Basic: Story = {
  args: {
    left: [
      { label: 'Analytics', value: 'analytics' },
      { label: 'Payments', value: 'payments' },
      { label: 'Automation', value: 'automation' },
    ],
    right: [],
  },
}