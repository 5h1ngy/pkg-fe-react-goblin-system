import { Meta, StoryObj } from '@storybook/react'

import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Card> = {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Card,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader title="Featured Article" subheader="September 2025" />
      <CardMedia image="https://picsum.photos/seed/card-story/800/400" />
      <CardContent>
        <Typography variant="body2">
          Cards present content and actions on a single topic.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Share</Button>
        <Button variant="text">Learn More</Button>
      </CardActions>
    </Card>
  ),
}
