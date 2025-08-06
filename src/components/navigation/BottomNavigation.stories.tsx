import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { BottomNavigation, BottomNavigationAction } from '../../components'

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
}

export default meta
type Story = StoryObj<typeof BottomNavigation>

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <BottomNavigation value={value} onChange={(_, newValue) => typeof newValue === 'number' && setValue(newValue)}>
        <BottomNavigationAction label="Recents" value={0} />
        <BottomNavigationAction label="Favorites" value={1} />
        <BottomNavigationAction label="Nearby" value={2} />
      </BottomNavigation>
    )
  },
}
