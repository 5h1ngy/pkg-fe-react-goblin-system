import {Meta, StoryObj} from '@storybook/react'

import { Container, Typography } from '../../components'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  args: {
    maxWidth: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Basic: Story = {
  render: (args) => (
    <Container {...args}>
      <Typography variant="h5">Contained content</Typography>
      <Typography variant="body2">
        This container constrains width and applies gutters automatically.
      </Typography>
    </Container>
  ),
}
