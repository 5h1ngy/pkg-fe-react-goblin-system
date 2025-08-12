import Translate, { translate } from '@docusaurus/Translate'
import clsx from 'clsx'
import type { JSX } from 'react'

import { ErrorCauseBoundary, ThemeClassNames } from '@docusaurus/theme-common'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
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
  Select,
  Stack,
  Typography,
} from 'pkg-fe-react-goblin-system/components'
import { SECONDARY_COLOR_OPTIONS, useSecondaryColor } from '@site/src/theme/Layout/Provider'

import { useNavbarContentItems, useNavbarContentLocaleOptions } from './NavbarContent.hooks'
import type { NavbarLocaleOption } from './NavbarContent.types'
import {
  navbarAccentCodeSx,
  navbarAccentLabelSx,
  navbarBrandSectionSx,
  navbarColorPickerContainerSx,
  navbarColorSwatchSx,
  navbarContentRowSx,
  navbarDesktopLinksSx,
  navbarLocaleSelectSx,
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
  options: string[]
  selected: string
  onSelect: (value: string) => void
}): JSX.Element => (
  <Stack direction="row" alignItems="center" sx={navbarColorPickerContainerSx}>
    <Typography variant="caption" color="textSecondary" sx={navbarAccentLabelSx}>
      <Translate id="navbar.secondaryColorPicker.label" description="Label for secondary color picker in navbar">
        Accent
      </Translate>
      <Box component="span" sx={navbarAccentCodeSx}>
        {selected.toUpperCase()}
      </Box>
    </Typography>
    {options.map((color) => {
      const accentLabel = translate({
        id: 'navbar.secondaryColorPicker.option',
        message: 'Set secondary color to {color}',
        description: 'Aria label for the secondary color picker button',
      }).replace('{color}', color.toUpperCase())

      return (
        <IconButton
          key={color}
          variant="contained"
          aria-label={accentLabel}
          data-active={selected === color}
          onClick={() => onSelect(color)}
          sx={navbarColorSwatchSx(color, selected === color)}
        >
          <span className="sr-only">{color}</span>
        </IconButton>
      )
    })}
  </Stack>
)

const NavbarContentLocaleSelect = ({
  options,
  currentLocale,
  ariaLabel,
  onChange,
}: {
  options: NavbarLocaleOption[]
  currentLocale: string
  ariaLabel: string
  onChange: (option: NavbarLocaleOption) => void
}): JSX.Element => (
  <Select
    aria-label={ariaLabel}
    value={currentLocale}
    onChange={(event) => {
      const target = options.find((option) => option.value === event.target.value)
      if (target) {
        onChange(target)
      }
    }}
    options={options.map((option) => ({
      value: option.value,
      label: option.label,
    }))}
    variant="outlined"
    sx={navbarLocaleSelectSx}
  />
)

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar()
  const items = useNavbarContentItems()
  const [leftItems, rightItems] = splitNavbarItems(items)
  const { secondary, setSecondary } = useSecondaryColor()
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  const localeOptions = useNavbarContentLocaleOptions()

  const searchBarItem = items.find((item) => item.type === 'search')
  const localeAriaLabel = translate({
    id: 'navbar.localeSelect.aria',
    message: 'Select language',
    description: 'ARIA label for the locale select component in the navbar',
  })

  const handleLocaleChange = (option: NavbarLocaleOption) => {
    window.location.href = option.url
  }

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
          <Box component="div" sx={navbarDesktopLinksSx('md')}>
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
          <Box component="div" sx={navbarDesktopLinksSx('lg')}>
            <NavbarContentItems items={rightItems} />
          </Box>
          <NavbarContentSecondaryColorPicker
            options={[...SECONDARY_COLOR_OPTIONS]}
            selected={secondary}
            onSelect={setSecondary}
          />
          <NavbarContentLocaleSelect
            options={localeOptions}
            currentLocale={currentLocale}
            ariaLabel={localeAriaLabel}
            onChange={handleLocaleChange}
          />
          <NavbarColorModeToggle />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}
