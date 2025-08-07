import {Meta, StoryObj} from '@storybook/react'

import { Box } from '../../components'
import { componentDocs } from '../componentDocs';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Box,
      },
    },
  },
  args: {
    sx: {
      padding: 2,
      backgroundColor: '#f0f4ff',
      borderRadius: '0.5rem',
    },
    children: 'Box content',
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Playground: Story = {}