import { useState } from 'react'
import {Meta, StoryObj} from '@storybook/react'

import { ToggleButton, ToggleButtonGroup } from '../../components'

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
}

export default meta
type Story = StoryObj<typeof ToggleButtonGroup>

export const Exclusive: Story = {
  render: () => {
    const [value, setValue] = useState('left')
    return (
      <ToggleButtonGroup value={value} onChange={(_, newValue) => typeof newValue === 'string' && setValue(newValue)}>
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}
