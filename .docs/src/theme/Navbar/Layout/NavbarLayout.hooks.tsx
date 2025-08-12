import { useMemo } from 'react'

import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'

import { createNavbarBackdropSx, createNavbarLayoutSx } from './NavbarLayout.style'

export const useNavbarLayoutState = (hideOnScroll: boolean) => {
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

  const navbarSx = useMemo(
    () => createNavbarLayoutSx(hideOnScroll, isNavbarVisible),
    [hideOnScroll, isNavbarVisible],
  )
  const backdropSx = useMemo(
    () => createNavbarBackdropSx(mobileSidebar.shown),
    [mobileSidebar.shown],
  )

  return {
    navbarRef,
    isNavbarVisible,
    navbarSx,
    backdropSx,
    mobileSidebar,
  }
}
