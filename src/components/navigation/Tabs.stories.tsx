import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { Tab, TabPanel, Tabs } from '../../components'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('one')
    return (
      <>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
        <TabPanel value="one">Panel One</TabPanel>
        <TabPanel value="two">Panel Two</TabPanel>
        <TabPanel value="three">Panel Three</TabPanel>
      </>
    )
  },
}
