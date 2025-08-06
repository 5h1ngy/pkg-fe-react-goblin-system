import {Meta, StoryObj} from '@storybook/react'

import { Box, Stack } from '../../components'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  args: {
    direction: 'row',
    spacing: 2,
  },
}

export default meta
type Story = StoryObj<typeof Stack>

export const Basic: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box sx={{ padding: 2, backgroundColor: '#ede7f6', borderRadius: '0.5rem' }}>First</Box>
      <Box sx={{ padding: 2, backgroundColor: '#e8f5e9', borderRadius: '0.5rem' }}>Second</Box>
      <Box sx={{ padding: 2, backgroundColor: '#fff3e0', borderRadius: '0.5rem' }}>Third</Box>
    </Stack>
  ),
}
