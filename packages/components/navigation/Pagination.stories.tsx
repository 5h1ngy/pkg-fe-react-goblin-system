import {Meta, StoryObj} from '@storybook/react'

import { Pagination } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Pagination,
      },
    },
  },
  args: {
    count: 10,
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Basic: Story = {}