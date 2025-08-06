import {Meta, StoryObj} from '@storybook/react'

import { Portal } from '../../components'

const meta: Meta<typeof Portal> = {
  title: 'Utils/Portal',
  component: Portal,
}

export default meta
type Story = StoryObj<typeof Portal>

export const Basic: Story = {
  render: () => (
    <Portal>
      <div style={{ position: 'fixed', top: 16, right: 16, background: '#000', color: '#fff', padding: '0.5rem 1rem' }}>
        Portal content
      </div>
    </Portal>
  ),
}
