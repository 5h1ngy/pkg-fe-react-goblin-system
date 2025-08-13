import { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import type { JSX } from 'react'

import { ErrorCauseBoundary, ThemeClassNames } from '@docusaurus/theme-common'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import NavbarSearch from '@theme/Navbar/Search'
import SearchBar from '@theme/SearchBar'

import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from 'pkg-fe-react-goblin-system/components'
import { SECONDARY_COLOR_OPTIONS, useSecondaryColor } from '@site/src/theme/Layout/Provider'

import { useNavbarContentState } from './NavbarContent.hooks'
import {
  navbarAccentCodeSx,
  navbarAccentLabelSx,
  navbarBrandSectionSx,
  navbarColorPickerContainerSx,
  navbarColorSwatchSx,
  navbarContentRowSx,
  navbarDesktopLinksSx,
  navbarRightSectionSx,
} from './NavbarContent.style'

const NavbarContentItems = ({ items }: { items: NavbarItemConfig[] }): JSX.Element => (
  <>
    {items.map((item, index) => (
      <ErrorCauseBoundary
        key={index}
        onError={(error) =>
          new Error(
            `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(
              item,
              null,
              2,
            )}\nOriginal error: ${String(error)}`,
          )
        }
      >
        <NavbarItem {...item} />
      </ErrorCauseBoundary>
    ))}
  </>
)

const NavbarContentSecondaryColorPicker = ({
  options,
  selected,
  onSelect,
}: {
  options: readonly string[]
  selected: string
  onSelect: (value: string) => void
}): JSX.Element => {
  const accentLabelTemplate = translate({
    id: 'navbar.secondaryColorPicker.option',
    message: 'Set secondary color to {color}',
    description: 'Aria label for the secondary color picker button',
  })

  return (
    <Stack direction="row" alignItems="center" sx={navbarColorPickerContainerSx}>
      <Typography variant="caption" color="textSecondary" sx={navbarAccentLabelSx}>
        <Box component="span" sx={navbarAccentCodeSx}>
          {selected.toUpperCase()}
        </Box>
      </Typography>
      {options.map((color) => (
        <IconButton
          key={color}
          variant="contained"
          aria-label={accentLabelTemplate.replace('{color}', color.toUpperCase())}
          data-active={selected === color}
          onClick={() => onSelect(color)}
          sx={navbarColorSwatchSx(color, selected === color)}
        />
      ))}
    </Stack>
  )
}

const NavbarContent = (): JSX.Element => {
  const mobileSidebar = useNavbarMobileSidebar()
  const { secondary, setSecondary } = useSecondaryColor()
  const { leftItems, rightItems, showSearchInput, showColorPicker } = useNavbarContentState()

  return (
    <Container
      maxWidth="lg"
      className={clsx(
        ThemeClassNames.layout.navbar.container,
        'navbar__inner',
        'goblin-navbar__container',
      )}
    >
      <Stack component="div" direction="row" className="navbar__items" sx={navbarContentRowSx()}>
        <Stack
          component="div"
          direction="row"
          alignItems="center"
          spacing={3}
          className="navbar__items"
          sx={navbarBrandSectionSx}
        >
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <Box component="div" sx={navbarDesktopLinksSx('sm')}>
            <NavbarContentItems items={leftItems} />
          </Box>
        </Stack>

        <Stack
          component="div"
          direction="row"
          alignItems="center"
          spacing={1.5}
          className="navbar__items navbar__items--right"
          sx={navbarRightSectionSx}
        >
          {showColorPicker && (
            <NavbarContentSecondaryColorPicker
              options={SECONDARY_COLOR_OPTIONS}
              selected={secondary}
              onSelect={setSecondary}
            />
          )}
          <Box component="div" sx={navbarDesktopLinksSx('md')}>
            <NavbarContentItems items={rightItems} />
          </Box>
          <NavbarColorModeToggle />
          {showSearchInput && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}

export default NavbarContent
