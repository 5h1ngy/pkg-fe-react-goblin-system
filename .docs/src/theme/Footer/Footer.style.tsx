import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { withAlpha } from '@site/src/theme/utils/color'

const footerSurface = (theme: GoblinTheme) => {
  const {
    palette: { mode, background, secondary },
  } = theme
  const halo = withAlpha(secondary.light ?? secondary.main, mode === 'dark' ? 0.22 : 0.2)
  const mid = withAlpha(secondary.main, mode === 'dark' ? 0.18 : 0.14)
  const base =
    mode === 'dark' ? withAlpha(background.paper, 0.96) : withAlpha('#ffffff', 0.96)

  if (mode === 'dark') {
    return `radial-gradient(140% 140% at 50% 0%, ${halo} 0%, ${mid} 48%, ${base} 100%)`
  }

  return `radial-gradient(140% 140% at 50% 0%, ${halo} 0%, ${mid} 52%, ${base} 100%)`
}

export const footerContainerSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  background: footerSurface(theme),
  paddingBlock: theme.spacing(3),
  borderTop: `1px solid ${withAlpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.28 : 0.18)}`,
})

export const footerGroupTitleSx = (): ComponentProps<typeof Typography>['sx'] =>
  (theme: GoblinTheme) => ({
    fontSize: theme.typography.pxToRem?.(13) ?? '0.8125rem',
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: theme.palette.text.secondary,
  })

export const footerLinkWrapperSx: ComponentProps<typeof Box>['sx'] = {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
}

export const footerLinkContentSx: ComponentProps<typeof Stack>['sx'] = (theme: GoblinTheme) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
})

export const footerLogoLinkSx: ComponentProps<typeof Box>['sx'] = {
  display: 'inline-flex',
}

export const footerLogoImageSx = (maxHeight?: number): ComponentProps<typeof Box>['sx'] => ({
  display: 'block',
  maxHeight: maxHeight ?? 48,
})

export const footerContentStackSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
}

export const footerGridSx: ComponentProps<typeof Grid>['sx'] = { marginBottom: 6 }
