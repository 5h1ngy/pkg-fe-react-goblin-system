import { useState } from "react"

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { BottomNavigationContext } from './BottomNavigation.context'
import { BottomNavigationRoot } from './BottomNavigation.style'
import type { BottomNavigationProps } from './BottomNavigation.types'

export const BottomNavigation = ({ value, defaultValue = 0, onChange, children, sx, style, ...rest }: BottomNavigationProps) => {
  const [internalValue, setInternalValue] = useState<string | number>(defaultValue)
  const currentValue = value ?? internalValue
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string | number) => {
    setInternalValue(newValue)
    onChange?.(event, newValue)
  }

  return (
    <BottomNavigationContext.Provider value={{ value: currentValue, onChange: handleChange }}>
      <BottomNavigationRoot style={resolvedStyle} {...rest}>
        {children}
      </BottomNavigationRoot>
    </BottomNavigationContext.Provider>
  )
}

BottomNavigation.displayName = 'BottomNavigation'
