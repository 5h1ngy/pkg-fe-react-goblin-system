import type { ComponentProps } from 'react'

import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { Box, IconButton, Select, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

export const navbarContentRowSx = () => (theme: GoblinTheme) => ({
  width: '100%',
  minHeight: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  flexWrap: 'wrap' as const,
  rowGap: theme.spacing(2),
  padding: '1rem',
})

export const navbarBrandSectionSx: ComponentProps<typeof Stack>['sx'] = (theme: GoblinTheme) => ({
  flex: 1,
  minWidth: 0,
  '& .navbar__brand': {
    marginRight: theme.spacing(1.5),
  },
})

export const navbarRightSectionSx: ComponentProps<typeof Stack>['sx'] = (theme: GoblinTheme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap' as const,
  rowGap: theme.spacing(1),
})

export const navbarColorPickerContainerSx: ComponentProps<typeof Stack>['sx'] = (
  theme: GoblinTheme,
) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexWrap: 'wrap' as const,
  rowGap: theme.spacing(1),
  paddingInlineEnd: theme.spacing(1.5),
  borderInlineEnd: '1px solid rgba(148, 163, 184, 0.18)',
})

export const navbarAccentLabelSx: ComponentProps<typeof Typography>['sx'] = (
  theme: GoblinTheme,
) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  fontWeight: 600,
})

export const navbarAccentCodeSx: ComponentProps<typeof Box>['sx'] = (theme: GoblinTheme) => ({
  fontFamily: 'monospace',
  fontSize: '0.75rem',
  color: theme.palette.secondary.main,
  padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
})

export const navbarColorSwatchSx =
  (color: string, active: boolean): ComponentProps<typeof IconButton>['sx'] =>
  (theme: GoblinTheme) => ({
    backgroundColor: color,
    border: active ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(255,255,255,0.35)',
    boxShadow: active ? '0 0 12px rgba(255, 255, 255, 0.35)' : '0 10px 18px rgba(0, 0, 0, 0.35)',
    transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease',
    color: active ? theme.palette.background.paper : theme.palette.text.primary,
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    '&:hover': {
      transform: 'scale(1.05)',
    },
  })

export const navbarLocaleSelectSx: ComponentProps<typeof Select>['sx'] = (theme: GoblinTheme) => ({
  minWidth: theme.spacing(18),
  '& select': {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: theme.shape.borderRadius,
  },
})
