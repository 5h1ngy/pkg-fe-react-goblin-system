import clsx from 'clsx'
import type { JSX } from 'react'

import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'

import { Box } from 'pkg-fe-react-goblin-system/components'

import type { NavbarLayoutProps } from './NavbarLayout.types'
import { useNavbarLayoutState } from './NavbarLayout.hooks'

const NavbarLayout = ({ children }: NavbarLayoutProps): JSX.Element => {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig()

  const { navbarRef, navbarSx, backdropSx, mobileSidebar, isNavbarVisible } =
    useNavbarLayoutState(hideOnScroll)

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
        sx={navbarSx}
      >
        {children}
      </Box>
      <Box
        component="button"
        type="button"
        className="navbar-sidebar__backdrop"
        aria-hidden="true"
        onClick={mobileSidebar.toggle}
        sx={backdropSx}
      />
      <NavbarMobileSidebar />
    </>
  )
}

export default NavbarLayout
