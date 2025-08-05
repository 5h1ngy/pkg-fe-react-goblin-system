import type { Meta, StoryObj } from '@storybook/react'

import { TransferList } from '../../components'

const meta: Meta<typeof TransferList> = {
  title: 'Inputs/TransferList',
  component: TransferList,
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
