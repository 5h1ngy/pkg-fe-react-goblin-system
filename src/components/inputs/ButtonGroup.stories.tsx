import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonGroup } from '../../components'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  args: {
    variant: 'outlined',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Horizontal: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup {...args} orientation="vertical">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
}
