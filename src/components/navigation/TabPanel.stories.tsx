import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tab, TabPanel, Tabs } from '../../components'

const meta: Meta<typeof TabPanel> = {
  title: 'Navigation/TabPanel',
  component: TabPanel,
}

export default meta
type Story = StoryObj<typeof TabPanel>

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>('one')
    return (
      <>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab value="one" label="First" />
          <Tab value="two" label="Second" />
        </Tabs>
        <TabPanel {...args} value="one" hidden={false}>
          First content
        </TabPanel>
        <TabPanel value="two">Second content</TabPanel>
      </>
    )
  },
}
