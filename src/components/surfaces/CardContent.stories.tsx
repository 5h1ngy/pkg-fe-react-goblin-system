import {Meta, StoryObj} from '@storybook/react'

import { Card, CardContent, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof CardContent> = {
  title: 'Surfaces/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.CardContent,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardContent>

export const Basic: Story = {
  render: (args) => (
    <Card>
      <CardContent {...args}>
        <Typography variant="body1">This is card content.</Typography>
      </CardContent>
    </Card>
  ),
}