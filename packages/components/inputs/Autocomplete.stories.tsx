import { Meta, StoryObj } from '@storybook/react'

import { Autocomplete } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Autocomplete,
      },
    },
  },
  args: {
    label: 'Country',
    options: [
      { label: 'Italy', value: 'it' },
      { label: 'Spain', value: 'es' },
      { label: 'Germany', value: 'de' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Basic: Story = {}
