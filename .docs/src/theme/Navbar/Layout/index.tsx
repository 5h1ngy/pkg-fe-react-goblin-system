import type { ComponentProps, ReactNode } from 'react'
import { useMemo } from 'react'
import clsx from 'clsx'

import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'

import { Box } from 'pkg-fe-react-goblin-system/components'
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

const backdropSx =
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

const navbarSurface = (mode: 'light' | 'dark') =>
  mode === 'dark'
    ? 'linear-gradient(180deg, rgba(10, 15, 23, 0.92) 0%, rgba(10, 14, 22, 0.86) 100%)'
    : 'linear-gradient(180deg, rgba(247, 249, 255, 0.94) 0%, rgba(255, 255, 255, 0.86) 100%)'

export default function NavbarLayout({ children }: { children: ReactNode }): JSX.Element {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

  const navbarStyles = useMemo<ComponentProps<typeof Box>['sx']>(
    () => (theme: GoblinTheme) => ({
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: theme.zIndex.appBar,
      backdropFilter: 'blur(20px)',
      background: navbarSurface(theme.palette.mode),
      boxShadow:
        theme.palette.mode === 'dark'
          ? '0 18px 36px rgba(4, 6, 12, 0.55)'
          : '0 18px 36px rgba(45, 63, 102, 0.18)',
      transform: hideOnScroll && !isNavbarVisible ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 180ms ease, background 240ms ease, box-shadow 240ms ease',
      borderBottom:
        theme.palette.mode === 'dark'
          ? '1px solid rgba(148, 163, 184, 0.12)'
          : '1px solid rgba(80, 104, 154, 0.12)',
    }),
    [hideOnScroll, isNavbarVisible],
  )

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
      <Box
        component="button"
        type="button"
        className="navbar-sidebar__backdrop"
        aria-hidden="true"
        onClick={mobileSidebar.toggle}
        sx={backdropSx(mobileSidebar.shown)}
      />
      <NavbarMobileSidebar />
    </>
  )
}
