import {Meta, StoryObj} from '@storybook/react'

import { Box, Grid } from '../../components'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
}

export default meta
type Story = StoryObj<typeof Grid>

export const Responsive: Story = {
  render: () => (
    <Grid container spacing={2}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Box
            sx={{
              padding: 2,
              borderRadius: '0.5rem',
              backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#e8f5e9',
              textAlign: 'center',
            }}
          >
            Item {index + 1}
          </Box>
        </Grid>
      ))}
    </Grid>
  ),
}
