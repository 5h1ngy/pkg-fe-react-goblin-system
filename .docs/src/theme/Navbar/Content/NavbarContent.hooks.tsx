import { useEffect, useMemo, useState } from 'react'

import { useThemeConfig } from '@docusaurus/theme-common'
import { splitNavbarItems } from '@docusaurus/theme-common/internal'
import { type Props as NavbarItemConfig } from '@theme/NavbarItem'
import { useGoblinTheme } from 'pkg-fe-react-goblin-system/foundations'

const useNavbarContentItems = (): NavbarItemConfig[] => {
  const configItems = useThemeConfig().navbar.items as NavbarItemConfig[]

  return useMemo(
    () =>
      configItems.map((item) => {
        if ('label' in item) {
          const route =
            'to' in item && typeof item.to === 'string'
              ? item.to
              : 'href' in item && typeof item.href === 'string'
                ? item.href
                : undefined

          if (route === '/docs' || route === 'docs/') {
            return {
              ...item,
              label: 'Docs',
            }
          }

          const normalizedRoute = route ?? ''
          const isStorybookRoute =
            normalizedRoute === '/storybook' ||
            normalizedRoute === 'storybook/' ||
            normalizedRoute === './storybook/' ||
            normalizedRoute === 'storybook/index.html' ||
            normalizedRoute.endsWith('/storybook/') ||
            normalizedRoute.includes('storybook/index.html')

          if (isStorybookRoute) {
            return {
              ...item,
              label: 'Storybook',
              position: 'right',
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          }
        }

        return item
      }),
    [configItems],
  )
}

const useNavbarIsDesktop = (): boolean => {
  const theme = useGoblinTheme()
  const breakpoint = theme.breakpoints.values.md
  const query = `(min-width:${breakpoint}px)`
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }
    const media = window.matchMedia(query)
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches)
    }

    setIsDesktop(media.matches)

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange)
      return () => media.removeEventListener('change', handleChange)
    }

    media.addListener(handleChange)
    return () => media.removeListener(handleChange)
  }, [query])

  return isDesktop
}

export const useNavbarContentState = () => {
  const items = useNavbarContentItems()
  const [leftItems, rightItems] = useMemo(() => splitNavbarItems(items), [items])
  const hasSearchItem = useMemo(() => items.some((item) => item.type === 'search'), [items])
  const isDesktop = useNavbarIsDesktop()

  return {
    leftItems,
    rightItems,
    showSearchInput: !hasSearchItem,
    isDesktop,
  }
}

export type { NavbarItemConfig }
