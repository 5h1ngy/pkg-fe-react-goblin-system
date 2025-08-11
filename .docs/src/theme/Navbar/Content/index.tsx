import Translate, { translate } from '@docusaurus/Translate'
import type { ReactNode } from 'react'

import {
  ThemeClassNames,
  useThemeConfig,
  ErrorCauseBoundary,
  mergeSearchStrings,
  useHistorySelector,
} from '@docusaurus/theme-common'
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
  useAlternatePageUtils,
} from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarLogo from '@theme/Navbar/Logo'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import NavbarSearch from '@theme/Navbar/Search'
import SearchBar from '@theme/SearchBar'

import clsx from 'clsx'

import {
  Box,
  Container,
  IconButton,
  Select,
  Stack,
  Typography,
} from 'pkg-fe-react-goblin-system/components'
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'
import { SECONDARY_COLOR_OPTIONS, useSecondaryColor } from '@site/src/theme/Layout/Provider'
import React from 'react'

type LocaleOption = {
  value: string
  label: string
  url: string
}

function useLocaleOptions(): LocaleOption[] {
  const {
    siteConfig,
    i18n: { locales, localeConfigs },
  } = useDocusaurusContext()
  const alternatePageUtils = useAlternatePageUtils()
  const search = useHistorySelector((history) => history.location.search)
  const hash = useHistorySelector((history) => history.location.hash)

  const getLocaleConfig = (locale: string) => {
    const config = localeConfigs[locale]
    if (!config) {
      throw new Error(`No locale config found for ${locale}`)
    }
    return config
  }

  const getBaseUrlForLocale = (locale: string) => {
    const localeConfig = getLocaleConfig(locale)
    const isSameDomain = localeConfig.url === siteConfig.url
    if (isSameDomain) {
      return `pathname://${alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      })}`
    }
    return alternatePageUtils.createUrl({ locale, fullyQualified: true })
  }

  return locales.map((locale) => {
    const localeConfig = getLocaleConfig(locale)
    const baseUrl = getBaseUrlForLocale(locale)
    const url = `${baseUrl}${mergeSearchStrings([search], 'append')}${hash}`
    return {
      value: locale,
      label: localeConfig.label,
      url,
    }
  })
}

function useNavbarItems(): NavbarItemConfig[] {
  const configItems = useThemeConfig().navbar.items as NavbarItemConfig[]
  return configItems.map((item) => {
    if ('label' in item) {
      const route = (item as { to?: string }).to
      if (route === '/docs') {
        return {
          ...item,
          label: translate({
            id: 'navbar.docs',
            message: 'Docs',
            description: 'Navbar link to documentation',
          }),
        }
      }
      if (route === '/storybook') {
        return {
          ...item,
          label: translate({
            id: 'navbar.storybook',
            message: 'Storybook',
            description: 'Navbar link to Storybook',
          }),
        }
      }
    }

    return item
  })
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): ReactNode {
  return (
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
              )}`,
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
  minHeight: theme.spacing(9),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3),
  paddingBlock: theme.spacing(2.5),
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

const colorPickerContainerSx = () => (theme: GoblinTheme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingInlineEnd: theme.spacing(1.5),
  borderInlineEnd: '1px solid rgba(148, 163, 184, 0.18)',
  marginInlineEnd: theme.spacing(1.5),
})

const colorSwatchSx = (color: string, active: boolean) => (theme: GoblinTheme) => ({
  backgroundColor: color,
  border: active ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(255,255,255,0.35)',
  boxShadow: active ? '0 0 12px rgba(255, 255, 255, 0.35)' : '0 10px 18px rgba(0, 0, 0, 0.35)',
  transition: 'transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease',
  color: active ? theme.palette.background.paper : theme.palette.text.primary,
  '&:hover': {
    transform: 'scale(1.05)',
  },
})

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar()
  const items = useNavbarItems()
  const [leftItems, rightItems] = splitNavbarItems(items)
  const { secondary, setSecondary } = useSecondaryColor()
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()
  const localeOptions = useLocaleOptions()

  const searchBarItem = items.find((item) => item.type === 'search')

  return (
    <Container
      maxWidth="lg"
      className={clsx(
        ThemeClassNames.layout.navbar.container,
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
          spacing={2}
          className="navbar__items navbar__items--right"
          sx={(theme: GoblinTheme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1.5),
          })}
        >
          <Box component="div" sx={desktopLinksSx('lg')}>
            <NavbarItems items={rightItems} />
          </Box>
          <Stack direction="row" alignItems="center" sx={colorPickerContainerSx()}>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(0.75),
                fontWeight: 600,
              })}
            >
              <Translate id="navbar.secondaryColorPicker.label">Accent</Translate>
              <Box
                component="span"
                sx={(theme) => ({
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: theme.palette.secondary.main,
                  padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(0, 0, 0, 0.06)',
                })}
              >
                {secondary.toUpperCase()}
              </Box>
            </Typography>
            {SECONDARY_COLOR_OPTIONS.map((color) => (
              <IconButton
                key={color}
                variant="contained"
                aria-label={translate(
                  {
                    id: 'navbar.secondaryColorPicker.option',
                    message: 'Set secondary color to {color}',
                    description: 'Aria label for the secondary color picker button',
                  },
                  { color },
                )}
                data-active={secondary === color}
                onClick={() => setSecondary(color)}
                sx={colorSwatchSx(color, secondary === color)}
              >
                <span className="sr-only">{color}</span>
              </IconButton>
            ))}
          </Stack>
          <Select
            aria-label={translate({
              id: 'navbar.localeSelect.aria',
              message: 'Select language',
              description: 'ARIA label for the locale select component in the navbar',
            })}
            value={currentLocale}
            onChange={(event) => {
              const nextLocale = event.target.value
              const target = localeOptions.find((option) => option.value === nextLocale)
              if (target) {
                window.location.href = target.url
              }
            }}
            options={localeOptions.map((option) => ({
              value: option.value,
              label: option.label,
            }))}
            variant="outlined"
            sx={(theme) => ({
              minWidth: theme.spacing(18),
              '& select': {
                padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                borderRadius: theme.shape.borderRadius,
              },
            })}
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
