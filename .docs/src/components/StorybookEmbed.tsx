import type { JSX } from 'react'

import { Box, Container, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { useStorybookEmbedUrl } from './StorybookEmbed.hooks'
import type { StorybookEmbedProps } from './StorybookEmbed.types'
import { storybookEmbedContainerSx, storybookEmbedFrameSx } from './StorybookEmbed.style'

const StorybookEmbed = ({ title }: StorybookEmbedProps): JSX.Element => {
  const storybookUrl = useStorybookEmbedUrl()

  return (
    <Container maxWidth="lg" sx={storybookEmbedContainerSx}>
      <Stack spacing={3}>
        <Typography variant="h2">Storybook</Typography>
        <Typography variant="body1" color="textSecondary">
          Explore live component stories that share the exact theme configuration used across the
          documentation site.
        </Typography>
        <Box
          component="iframe"
          src={storybookUrl}
          title={title ?? 'Goblin System Storybook'}
          sx={storybookEmbedFrameSx}
          allowFullScreen
        />
      </Stack>
    </Container>
  )
}

export default StorybookEmbed
