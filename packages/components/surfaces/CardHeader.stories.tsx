import {Meta, StoryObj} from '@storybook/react'

import { Card, CardHeader } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof CardHeader> = {
  title: 'Surfaces/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.CardHeader,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardHeader>

export const Basic: Story = {
  render: (args) => (
    <Card>
      <CardHeader {...args} />
    </Card>
  ),
  args: {
    title: 'Card Title',
    subheader: 'Subheader text',
  },
}