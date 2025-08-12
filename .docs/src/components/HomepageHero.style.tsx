import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const heroBackground = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? 'radial-gradient(120% 120% at 50% 0%, rgba(114, 46, 209, 0.28) 0%, rgba(15, 23, 42, 0.12) 42%, rgba(10, 12, 17, 0.92) 100%), linear-gradient(180deg, rgba(8, 10, 14, 0.92) 0%, rgba(8, 10, 14, 0.96) 100%)'
    : 'radial-gradient(120% 120% at 50% 0%, rgba(114, 46, 209, 0.2) 0%, rgba(231, 242, 255, 0.35) 46%, rgba(255, 255, 255, 0.92) 100%)'

export const homepageHeroSectionSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  paddingBlock: theme.spacing(12),
  background: heroBackground(theme.palette.mode),
})

export const homepageHeroStackSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
}

export const homepageHeroBodySx: ComponentProps<typeof Typography>['sx'] = { maxWidth: '38ch' }

export const homepageHeroLogoSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  width: theme.spacing(16),
  height: theme.spacing(16),
  objectFit: 'contain',
  filter:
    theme.palette.mode === 'dark'
      ? 'drop-shadow(0 18px 28px rgba(0, 0, 0, 0.55))'
      : 'drop-shadow(0 16px 24px rgba(45, 64, 109, 0.22))',
})
