import {Meta, StoryObj} from '@storybook/react'

import { Card, CardActions, Button } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof CardActions> = {
  title: 'Surfaces/CardActions',
  component: CardActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.CardActions,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardActions>

export const Basic: Story = {
  render: (args) => (
    <Card>
      <CardActions {...args}>
        <Button variant="text">Cancel</Button>
        <Button variant="text">Save</Button>
      </CardActions>
    </Card>
  ),
}