import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const footerSurface = (mode: 'light' | 'dark') =>
  mode === 'dark'
    ? 'radial-gradient(140% 140% at 50% 0%, rgba(86, 78, 206, 0.18) 0%, rgba(6, 8, 14, 0.92) 48%, rgba(4, 6, 12, 0.96) 100%)'
    : 'radial-gradient(140% 140% at 50% 0%, rgba(114, 46, 209, 0.18) 0%, rgba(248, 250, 255, 0.92) 52%, rgba(255, 255, 255, 0.96) 100%)'

export const footerContainerSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  background: footerSurface(theme.palette.mode),
  paddingBlock: theme.spacing(3),
  borderTop:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(148, 163, 184, 0.12)'
      : '1px solid rgba(80, 104, 154, 0.12)',
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
