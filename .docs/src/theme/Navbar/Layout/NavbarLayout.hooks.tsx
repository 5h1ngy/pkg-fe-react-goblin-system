import { useMemo } from 'react'

import type { ComponentProps } from 'react'

import { Box } from 'pkg-fe-react-goblin-system/components'

import { createNavbarLayoutSx } from './NavbarLayout.style'

export const useNavbarLayoutSx = (
  hideOnScroll: boolean,
  isNavbarVisible: boolean,
): ComponentProps<typeof Box>['sx'] =>
  useMemo(
    () => createNavbarLayoutSx(hideOnScroll, isNavbarVisible),
    [hideOnScroll, isNavbarVisible],
  )
