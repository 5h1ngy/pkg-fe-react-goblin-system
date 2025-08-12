import clsx from 'clsx'
import type { JSX } from 'react'

import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'

import { Box } from 'pkg-fe-react-goblin-system/components'

import type { NavbarLayoutProps } from './NavbarLayout.types'
import { createNavbarBackdropSx } from './NavbarLayout.style'
import { useNavbarLayoutSx } from './NavbarLayout.hooks'

const NavbarBackdrop = ({
  visible,
  onClick,
}: {
  visible: boolean
  onClick: () => void
}): JSX.Element => (
  <Box
    component="button"
    type="button"
    className="navbar-sidebar__backdrop"
    aria-hidden="true"
    onClick={onClick}
    sx={createNavbarBackdropSx(visible)}
  />
)

export default function NavbarLayout({ children }: NavbarLayoutProps): JSX.Element {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

  const navbarStyles = useNavbarLayoutSx(hideOnScroll, isNavbarVisible)

  return (
    <>
      <Box
        component="nav"
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main navigation',
          description: 'The ARIA label for the main navigation',
        })}
        className={clsx(
          ThemeClassNames.layout.navbar.container,
          'navbar',
          'navbar--fixed-top',
          hideOnScroll && 'navbar--hideable',
          hideOnScroll && !isNavbarVisible && 'navbar--hidden',
          mobileSidebar.shown && 'navbar-sidebar--show',
        )}
        sx={navbarStyles}
      >
        {children}
      </Box>
      <NavbarBackdrop visible={mobileSidebar.shown} onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </>
  )
}
