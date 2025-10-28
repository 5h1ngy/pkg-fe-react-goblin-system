import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Tab, Tabs } from '../../components'
import { componentDocs } from '../componentDocs'

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDocs.Tab,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 'one')
    return (
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab {...args} />
        <Tab value="two" label="Second" />
      </Tabs>
    )
  },
  args: {
    value: 'one',
    label: 'First',
  },
}
