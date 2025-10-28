import { Meta, StoryObj } from '@storybook/react'

import { Alert } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Alert,
      },
    },
  },
  args: {
    severity: 'info',
    children: 'This is an alert message.',
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Standard: Story = {}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
}
