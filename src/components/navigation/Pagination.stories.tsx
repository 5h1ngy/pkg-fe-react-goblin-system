import {Meta, StoryObj} from '@storybook/react'

import { Pagination } from '../../components'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: {
    count: 10,
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Basic: Story = {}
