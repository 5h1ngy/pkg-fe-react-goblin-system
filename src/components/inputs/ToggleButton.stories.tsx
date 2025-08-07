import {Meta, StoryObj} from '@storybook/react'

import { ToggleButton } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof ToggleButton> = {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.ToggleButton,
      },
    },
  },
  args: {
    children: 'Option',
    value: 'option',
  },
}

export default meta
type Story = StoryObj<typeof ToggleButton>

export const Selected: Story = {
  args: {
    selected: true,
  },
}

export const Unselected: Story = {}