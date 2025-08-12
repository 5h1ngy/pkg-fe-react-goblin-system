import { useMemo } from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { translate } from '@docusaurus/Translate'
import { mergeSearchStrings, useThemeConfig, useHistorySelector } from '@docusaurus/theme-common'
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal'
import { type Props as NavbarItemConfig } from '@theme/NavbarItem'

import type { NavbarLocaleOption } from './NavbarContent.types'

export const useNavbarContentLocaleOptions = (): NavbarLocaleOption[] => {
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

export const useNavbarContentItems = (): NavbarItemConfig[] => {
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

export type { NavbarItemConfig }
