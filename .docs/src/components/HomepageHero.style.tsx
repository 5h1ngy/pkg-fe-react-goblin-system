import type { ComponentProps } from 'react'

import { withAlpha, type GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const heroBackground = (theme: GoblinTheme): string => {
  const {
    palette: { mode, background, secondary },
  } = theme

  const accentGlow = withAlpha(secondary.light ?? secondary.main, mode === 'dark' ? 0.32 : 0.26)
  const accentMist = withAlpha(secondary.main, mode === 'dark' ? 0.18 : 0.16)
  const baseStart =
    mode === 'dark' ? withAlpha(background.paper, 0.92) : withAlpha(background.default, 0.9)
  const baseEnd =
    mode === 'dark' ? withAlpha(background.paper, 0.98) : withAlpha('#ffffff', 0.96)

  if (mode === 'dark') {
    return `radial-gradient(120% 120% at 50% 0%, ${accentGlow} 0%, ${accentMist} 42%, ${withAlpha(
      background.default,
      0.92,
    )} 100%), linear-gradient(180deg, ${baseStart} 0%, ${baseEnd} 100%)`
  }

  return `radial-gradient(120% 120% at 50% 0%, ${accentGlow} 0%, ${accentMist} 46%, ${baseEnd} 100%)`
}

export const homepageHeroSectionSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  paddingBlock: theme.spacing(12),
  background: heroBackground(theme),
})

export const homepageHeroStackSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
}

export const homepageHeroBodySx: ComponentProps<typeof Typography>['sx'] = { maxWidth: '38ch' }

export const homepageHeroLogoSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  width: theme.spacing(46),
  height: theme.spacing(46),
  objectFit: 'contain',
  filter:
    theme.palette.mode === 'dark'
      ? `drop-shadow(0 18px 32px ${withAlpha(theme.palette.secondary.dark, 0.45)})`
      : `drop-shadow(0 16px 26px ${withAlpha(theme.palette.secondary.light, 0.32)})`,
})
