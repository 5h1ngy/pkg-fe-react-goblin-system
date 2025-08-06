import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { BottomNavigation, BottomNavigationAction } from '../../components'

const meta: Meta<typeof BottomNavigationAction> = {
  title: 'Navigation/BottomNavigationAction',
  component: BottomNavigationAction,
}

export default meta
type Story = StoryObj<typeof BottomNavigationAction>

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0)
    return (
      <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue as number)}>
        <BottomNavigationAction {...args} />
        <BottomNavigationAction label="Next" value={1} />
      </BottomNavigation>
    )
  },
  args: {
    label: 'Current',
    value: 0,
  },
}
