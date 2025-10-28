import type { ComponentProps } from 'react'

import { Box } from 'pkg-fe-react-goblin-system/components'
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

export const createNavbarLayoutSx =
  (hideOnScroll: boolean, isVisible: boolean): ComponentProps<typeof Box>['sx'] =>
  (theme: GoblinTheme) => ({
    position: 'sticky',
    top: 0,
    height: 'fit-content',
    width: '100%',
    zIndex: theme.zIndex.appBar,
    backdropFilter: 'blur(20px)',
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(10, 15, 23, 0.92) 0%, rgba(10, 14, 22, 0.86) 100%)'
        : 'linear-gradient(180deg, rgba(247, 249, 255, 0.94) 0%, rgba(255, 255, 255, 0.86) 100%)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 18px 36px rgba(4, 6, 12, 0.55)'
        : '0 18px 36px rgba(45, 63, 102, 0.18)',
    transform: hideOnScroll && !isVisible ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 180ms ease, background 240ms ease, box-shadow 240ms ease',
    borderBottom:
      theme.palette.mode === 'dark'
        ? '1px solid rgba(148, 163, 184, 0.12)'
        : '1px solid rgba(80, 104, 154, 0.12)',
  })

export const createNavbarBackdropSx =
  (visible: boolean): ComponentProps<typeof Box>['sx'] =>
  (theme: GoblinTheme) => ({
    position: 'fixed',
    inset: 0,
    background: theme.palette.mode === 'dark' ? 'rgba(5, 8, 15, 0.64)' : 'rgba(15, 19, 33, 0.48)',
    backdropFilter: 'blur(8px)',
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? 'auto' : 'none',
    transition: 'opacity 160ms ease',
    zIndex: theme.zIndex.modal - 1,
  })
