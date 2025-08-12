import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Container } from 'pkg-fe-react-goblin-system/components'

export const storybookEmbedContainerSx: ComponentProps<typeof Container>['sx'] = (theme: GoblinTheme) => ({
  paddingBlock: theme.spacing(6),
  minHeight: `calc(100vh - ${theme.spacing(12)})`,
})

export const storybookEmbedFrameSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  width: '100%',
  minHeight: `calc(100vh - ${theme.spacing(24)})`,
  border: '1px solid rgba(148, 163, 184, 0.18)',
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.paper,
})
