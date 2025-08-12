import { useMemo } from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { translate } from '@docusaurus/Translate'
import {
  mergeSearchStrings,
  useHistorySelector,
  useThemeConfig,
} from '@docusaurus/theme-common'
import { splitNavbarItems, useAlternatePageUtils } from '@docusaurus/theme-common/internal'
import { type Props as NavbarItemConfig } from '@theme/NavbarItem'

import type { NavbarLocaleOption } from './NavbarContent.types'

const useNavbarContentLocaleOptions = (): NavbarLocaleOption[] => {
  const {
    siteConfig,
    i18n: { locales, localeConfigs },
  } = useDocusaurusContext()
  const alternatePageUtils = useAlternatePageUtils()
  const search = useHistorySelector((history) => history.location.search)
  const hash = useHistorySelector((history) => history.location.hash)

  return useMemo(
    () =>
      locales.map((locale) => {
        const localeConfig = localeConfigs[locale]
        if (!localeConfig) {
          throw new Error(`No locale config found for ${locale}`)
        }

        const isSameDomain = localeConfig.url === siteConfig.url
        const baseUrl = isSameDomain
          ? `pathname://${alternatePageUtils.createUrl({
              locale,
              fullyQualified: false,
            })}`
          : alternatePageUtils.createUrl({ locale, fullyQualified: true })

        return {
          value: locale,
          label: localeConfig.label,
          url: `${baseUrl}${mergeSearchStrings([search], 'append')}${hash}`,
        }
      }),
    [alternatePageUtils, hash, localeConfigs, locales, search, siteConfig.url],
  )
}

const useNavbarContentItems = (): NavbarItemConfig[] => {
  const configItems = useThemeConfig().navbar.items as NavbarItemConfig[]

  return useMemo(
    () =>
      configItems.map((item) => {
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
      }),
    [configItems],
  )
}

export const useNavbarContentState = () => {
  const items = useNavbarContentItems()
  const [leftItems, rightItems] = useMemo(() => splitNavbarItems(items), [items])
  const hasSearchItem = useMemo(
    () => items.some((item) => item.type === 'search'),
    [items],
  )
  const localeOptions = useNavbarContentLocaleOptions()
  const localeAriaLabel = translate({
    id: 'navbar.localeSelect.aria',
    message: 'Select language',
    description: 'ARIA label for the locale select component in the navbar',
  })
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext()

  return {
    leftItems,
    rightItems,
    showSearchInput: !hasSearchItem,
    localeOptions,
    localeAriaLabel,
    currentLocale,
  }
}

export type { NavbarItemConfig }
