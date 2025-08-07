import { Children, ReactElement, cloneElement, isValidElement, useState } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import type { ToggleButtonProps } from './ToggleButton.types'
import { ButtonGroupRoot } from './ButtonGroup.style'
import type { ToggleButtonGroupProps } from './ToggleButtonGroup.types'

export const ToggleButtonGroup = ({
  value,
  defaultValue,
  exclusive = true,
  onChange,
  children,
  orientation = 'horizontal',
  sx,
  style,
  ...rest
}: ToggleButtonGroupProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(defaultValue)

  const currentValue = value ?? internalValue

  const handleSelect = (event: React.MouseEvent<HTMLElement>, itemValue: string) => {
    if (exclusive) {
      setInternalValue(itemValue)
      onChange?.(event, itemValue)
      return
    }

    const arrayValue = Array.isArray(currentValue) ? currentValue : []
    const exists = arrayValue.includes(itemValue)
    const next = exists ? arrayValue.filter((val) => val !== itemValue) : [...arrayValue, itemValue]
    setInternalValue(next)
    onChange?.(event, next)
  }

  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child
    const childValue = child.props.value
    const selected = exclusive
      ? currentValue === childValue
      : Array.isArray(currentValue) && currentValue.includes(childValue)

    return cloneElement(child as ReactElement<ToggleButtonProps>, {
      selected,
      onClick: (event: React.MouseEvent<HTMLElement>) => handleSelect(event, childValue),
    })
  })

  return (
    <ButtonGroupRoot $orientation={orientation} style={resolvedStyle} {...rest}>
      {enhancedChildren}
    </ButtonGroupRoot>
  )
}

ToggleButtonGroup.displayName = 'ToggleButtonGroup'

