import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tab, Tabs } from '../../components'

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
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
