import { useTabsContext } from '../Tabs/Tabs.context'
import type { TabPanelProps } from './TabPanel.types'

export const TabPanel = ({ value, hidden, children, ...rest }: TabPanelProps) => {
  const ctx = useTabsContext()
  const active = ctx.value === value

  if (!active && hidden !== false) {
    return null
  }

  return (
    <div role="tabpanel" hidden={!active && hidden !== false} {...rest}>
      {children}
    </div>
  )
}

TabPanel.displayName = 'TabPanel'
