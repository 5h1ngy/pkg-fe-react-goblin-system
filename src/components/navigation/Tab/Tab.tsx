import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { useTabsContext } from '../Tabs/Tabs.context'
import { TabButton } from './Tab.style'
import type { TabProps } from './Tab.types'

export const Tab = ({ label, value, icon, sx, style, ...rest }: TabProps) => {
  const ctx = useTabsContext()
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const tabValue = value ?? label?.toString() ?? ''
  const selected = ctx.value === tabValue

  return (
    <TabButton
      type="button"
      role="tab"
      aria-selected={selected}
      $selected={selected}
      onClick={(event) => ctx.onChange(event, tabValue)}
      style={resolvedStyle}
      {...rest}
    >
      {icon}
      {label}
    </TabButton>
  )
}

Tab.displayName = 'Tab'
