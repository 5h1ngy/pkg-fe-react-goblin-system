import {Meta, StoryObj} from '@storybook/react'

import { Slider } from '../../components'

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Basic: Story = {}
