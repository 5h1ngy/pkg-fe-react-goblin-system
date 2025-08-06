import {Meta, StoryObj} from '@storybook/react'

import { Rating } from '../../components'

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  args: {
    defaultValue: 3,
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Interactive: Story = {}
