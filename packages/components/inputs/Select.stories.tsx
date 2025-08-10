import { Meta, StoryObj } from '@storybook/react'

import { Select } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Select,
      },
    },
  },
  args: {
    label: 'Status',
    options: [
      { label: 'Draft', value: 'draft' },
      { label: 'Published', value: 'published' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Basic: Story = {}
