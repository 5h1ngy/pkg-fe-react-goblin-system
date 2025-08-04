import type { Meta, StoryObj } from '@storybook/react'

import { Box, Container, Grid, ImageList, ImageListItem, Stack, Typography } from '../components'

const meta: Meta = {
  title: 'Layout/Overview',
  component: Box,
}

export default meta

type Story = StoryObj

export const Components: Story = {
  render: () => (
    <Stack spacing={3}>
      <section>
        <Typography variant="h6" gutterBottom>
          Container + Grid
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <Box
                  sx={{
                    padding: 2,
                    border: '1px solid',
                    borderColor: 'rgba(0,0,0,0.12)',
                    borderRadius: '8px',
                  }}
                >
                  Item {index + 1}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section>
        <Typography variant="h6" gutterBottom>
          Stack
        </Typography>
        <Stack direction="row" spacing={2} divider={<span>|</span>}>
          <Box>One</Box>
          <Box>Two</Box>
          <Box>Three</Box>
        </Stack>
      </section>

      <section>
        <Typography variant="h6" gutterBottom>
          Image List
        </Typography>
        <ImageList cols={3}>
          {['aurora', 'canyon', 'forest'].map((seed, index) => (
            <ImageListItem key={index}>
              <img
                src={`https://picsum.photos/seed/layout-${seed}/400/300`}
                alt={`Layout ${index}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </Stack>
  ),
}
