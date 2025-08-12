import { useMemo } from 'react'

import { translate } from '@docusaurus/Translate'
import { useThemeConfig } from '@docusaurus/theme-common'
import { splitNavbarItems } from '@docusaurus/theme-common/internal'
import { type Props as NavbarItemConfig } from '@theme/NavbarItem'

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
  const hasSearchItem = useMemo(() => items.some((item) => item.type === 'search'), [items])

  return {
    leftItems,
    rightItems,
    showSearchInput: !hasSearchItem,
  }
}

export type { NavbarItemConfig }
