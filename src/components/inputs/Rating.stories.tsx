import {Meta, StoryObj} from '@storybook/react'

import { Rating } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Rating,
      },
    },
  },
  args: {
    defaultValue: 3,
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Interactive: Story = {}