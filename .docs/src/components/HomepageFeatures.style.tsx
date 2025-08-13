import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, Card, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { withAlpha } from '@site/src/theme/utils/color'

const featureSectionBackground = (theme: GoblinTheme): string => {
  const {
    palette: { mode, secondary, background },
  } = theme
  const accentVeil = withAlpha(secondary.main, mode === 'dark' ? 0.22 : 0.16)
  const baseStart =
    mode === 'dark' ? withAlpha(background.default, 0.92) : withAlpha(background.default, 0.65)
  const baseEnd =
    mode === 'dark' ? withAlpha(background.paper, 0.96) : withAlpha('#ffffff', 0.92)

  return `linear-gradient(180deg, ${accentVeil} 0%, ${baseStart} 40%, ${baseEnd} 100%)`
}

const featureCardSurface = (mode: 'light' | 'dark'): { background: string; border: string } =>
  mode === 'dark'
    ? {
        background: 'rgba(17, 24, 39, 0.64)',
        border: '1px solid rgba(148, 163, 184, 0.18)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(148, 163, 184, 0.22)',
      }

const featureCardShadow = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? '0 28px 58px rgba(6, 12, 28, 0.55)'
    : '0 26px 48px rgba(47, 63, 102, 0.22)'

const featureCardHoverShadow = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? '0 38px 88px rgba(5, 10, 24, 0.7)'
    : '0 34px 66px rgba(40, 58, 96, 0.28)'

const featureBadgeBackground = (theme: GoblinTheme): string =>
  `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`

export const homepageFeaturesSectionSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  paddingBlock: theme.spacing(12),
  background: featureSectionBackground(theme),
})

export const homepageFeatureCardSx: ComponentProps<typeof Card>['sx'] = (theme: GoblinTheme) => ({
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  ...featureCardSurface(theme.palette.mode),
  boxShadow: featureCardShadow(theme.palette.mode),
  backdropFilter: 'blur(24px)',
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
  borderRadius: theme.shape.borderRadius * 1.5,
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: featureCardHoverShadow(theme.palette.mode),
    borderColor: theme.palette.secondary.main,
  },
})

export const homepageFeatureCardContentSx: ComponentProps<typeof Stack>['sx'] = (theme: GoblinTheme) => ({
  textAlign: 'left',
  width: '100%',
  alignItems: 'stretch',
  gap: theme.spacing(3),
})

export const homepageFeatureCardHeaderSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%',
})

export const homepageFeatureBadgeSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingInline: theme.spacing(1.5),
  paddingBlock: theme.spacing(0.75),
  borderRadius: 999,
  background: featureBadgeBackground(theme),
  color: theme.palette.secondary.contrastText,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 16px 28px rgba(6, 12, 26, 0.45)'
      : '0 14px 24px rgba(49, 68, 114, 0.22)',
  border:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(255, 255, 255, 0.14)'
      : '1px solid rgba(28, 42, 74, 0.12)',
})

export const homepageFeatureBadgeLabelSx: ComponentProps<typeof Typography>['sx'] = {
  letterSpacing: '0.14em',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
}

export const homepageFeatureIndexSx: ComponentProps<typeof Typography>['sx'] = (theme: GoblinTheme) => ({
  fontFamily: 'monospace',
  fontSize: theme.typography.pxToRem?.(14) ?? '0.875rem',
  color:
    theme.palette.mode === 'dark'
      ? 'rgba(203, 213, 225, 0.68)'
      : 'rgba(30, 41, 59, 0.58)',
  paddingInlineStart: theme.spacing(2),
  borderInlineStart:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(148, 163, 184, 0.28)'
      : '1px solid rgba(82, 98, 134, 0.24)',
})

export const homepageSectionHeaderSx: ComponentProps<typeof Stack>['sx'] = {
  textAlign: 'center',
}

export const homepageSectionIntroSx: ComponentProps<typeof Typography>['sx'] = { maxWidth: '60ch' }
