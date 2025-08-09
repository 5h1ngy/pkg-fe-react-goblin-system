import type { ReactNode } from 'react'

import { ThemeClassNames, useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import NavbarSearch from '@theme/Navbar/Search'
import SearchBar from '@theme/SearchBar'

import clsx from 'clsx'

import { Box, Container, Stack } from 'pkg-fe-react-goblin-system/components'
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

function useNavbarItems(): NavbarItemConfig[] {
  return useThemeConfig().navbar.items as NavbarItemConfig[]
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): ReactNode {
  return (
    <>
      {items.map((item, index) => (
        <ErrorCauseBoundary
          key={index}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  )
}

const primaryRowSx = () => (theme: GoblinTheme) => ({
  width: '100%',
  minHeight: theme.mixins?.toolbar?.minHeight ?? theme.spacing(7),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  paddingBlock: theme.spacing(2),
})

const desktopLinksSx =
  (displayFrom: 'md' | 'lg' = 'md') =>
  (theme: GoblinTheme) => ({
    display: 'none',
    alignItems: 'center',
    gap: theme.spacing(3),
    '& .navbar__link, & .navbar__item': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      transition: theme.transitions.create('color'),
    },
    '& .navbar__link:hover, & .navbar__link--active': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.up(displayFrom)]: {
      display: 'flex',
    },
  })

const actionTraySx = () => (theme: GoblinTheme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .clean-btn': {
    borderRadius: theme.shape.borderRadius,
  },
})

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar()
  const items = useNavbarItems()
  const [leftItems, rightItems] = splitNavbarItems(items)

  const searchBarItem = items.find((item) => item.type === 'search')

  return (
    <Container
      maxWidth="lg"
      className={clsx(
        ThemeClassNames.layout.navbar.containerInner,
        'navbar__inner',
        'goblin-navbar__container',
      )}
    >
      <Stack component="div" direction="row" className="navbar__items" sx={primaryRowSx()}>
        <Stack
          component="div"
          direction="row"
          alignItems="center"
          spacing={3}
          className="navbar__items"
          sx={(theme: GoblinTheme) => ({
            flex: 1,
            minWidth: 0,
            '& .navbar__brand': {
              marginRight: theme.spacing(1.5),
            },
          })}
        >
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <Box component="div" sx={desktopLinksSx('md')}>
            <NavbarItems items={leftItems} />
          </Box>
        </Stack>

        <Stack
          component="div"
          direction="row"
          alignItems="center"
          spacing={2.5}
          className="navbar__items navbar__items--right"
          sx={(theme: GoblinTheme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
          })}
        >
          <Box component="div" sx={desktopLinksSx('lg')}>
            <NavbarItems items={rightItems} />
          </Box>
          <Box component="div" sx={actionTraySx()}>
            <NavbarColorModeToggle />
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
