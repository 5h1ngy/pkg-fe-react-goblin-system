import { useState } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { TabsContext, TabsValue } from './Tabs.context'
import { TabsRoot } from './Tabs.style'
import type { TabsProps } from './Tabs.types'

export const Tabs = ({ value, defaultValue = 0, onChange, variant = 'standard', sx, style, children, ...rest }: TabsProps) => {
  const [internalValue, setInternalValue] = useState<TabsValue>(defaultValue)
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const currentValue = value ?? internalValue

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: TabsValue) => {
    setInternalValue(newValue)
    onChange?.(event, newValue)
  }

  return (
    <TabsContext.Provider value={{ value: currentValue, onChange: handleChange, variant }}>
      <TabsRoot $variant={variant} style={resolvedStyle} {...rest}>
        {children}
      </TabsRoot>
    </TabsContext.Provider>
  )
}

Tabs.displayName = 'Tabs'
