import {Meta, StoryObj} from '@storybook/react'

import { Card, CardContent, Typography } from '../../components'

const meta: Meta<typeof CardContent> = {
  title: 'Surfaces/CardContent',
  component: CardContent,
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
