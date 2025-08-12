import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Card, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const featureSectionBackground = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? 'linear-gradient(180deg, rgba(11, 13, 19, 0.9) 0%, rgba(9, 12, 18, 0.94) 100%)'
    : 'linear-gradient(180deg, rgba(237, 242, 252, 0.65) 0%, rgba(255, 255, 255, 0.92) 100%)'

const featureCardSurface = (mode: 'light' | 'dark'): { background: string; border: string } =>
  mode === 'dark'
    ? {
        background: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid rgba(148, 163, 184, 0.14)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.75)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
      }

export const homepageFeaturesSectionSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  paddingBlock: theme.spacing(12),
  background: featureSectionBackground(theme.palette.mode),
})

export const homepageFeatureCardSx: ComponentProps<typeof Card>['sx'] = (theme: GoblinTheme) => ({
  height: '100%',
  ...featureCardSurface(theme.palette.mode),
  boxShadow: 'none',
  backdropFilter: 'blur(22px)',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const homepageFeatureCardContentSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
  width: '100%',
}

export const homepageFeatureImageSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  width: theme.spacing(18),
  height: theme.spacing(18),
  objectFit: 'contain',
  filter:
    theme.palette.mode === 'dark'
      ? 'drop-shadow(0 14px 28px rgba(8, 12, 24, 0.5))'
      : 'drop-shadow(0 12px 24px rgba(47, 63, 102, 0.18))',
})

export const homepageSectionHeaderSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
}

export const homepageSectionIntroSx: ComponentProps<typeof Typography>['sx'] = { maxWidth: '60ch' }
