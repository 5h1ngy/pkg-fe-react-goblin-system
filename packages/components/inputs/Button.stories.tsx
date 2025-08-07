import {Meta, StoryObj} from '@storybook/react'

import { Button } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Button,
      },
    },
  },
  args: {
    children: 'Click me',
    variant: 'contained',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Contained: Story = {}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
  },
}