import { Children, ReactElement, cloneElement, isValidElement } from 'react'

import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import type { ButtonProps } from './Button.types'
import { ButtonGroupRoot } from './ButtonGroup.style'
import type { ButtonGroupProps } from './ButtonGroup.types'

export const ButtonGroup = ({
  orientation = 'horizontal',
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  fullWidth,
  children,
  sx,
  style,
  ...rest
}: ButtonGroupProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    return cloneElement(child as ReactElement<ButtonProps>, {
      variant,
      color,
      size,
      fullWidth,
    })
  })

  return (
    <ButtonGroupRoot
      $orientation={orientation}
      $fullWidth={fullWidth}
      style={resolvedStyle}
      {...rest}
    >
      {enhancedChildren}
    </ButtonGroupRoot>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
