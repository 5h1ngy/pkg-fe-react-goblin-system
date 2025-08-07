import {Meta, StoryObj} from '@storybook/react'

import { Card, CardMedia } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof CardMedia> = {
  title: 'Surfaces/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.CardMedia,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardMedia>

export const Image: Story = {
  render: (args) => (
    <Card>
      <CardMedia {...args} />
    </Card>
  ),
  args: {
    image: 'https://picsum.photos/seed/card-media/800/400',
  },
}