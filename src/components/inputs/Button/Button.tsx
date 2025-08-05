import { forwardRef } from 'react'

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { ButtonRoot } from './Button.style'
import type { ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'text', color = 'primary', size = 'medium', fullWidth, startIcon, endIcon, disableElevation, sx, style, children, ...rest },
  ref,
) {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ButtonRoot
      ref={ref}
      $variant={variant}
      $color={color}
      $size={size}
      $fullWidth={fullWidth}
      $disableElevation={disableElevation}
      style={resolvedStyle}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonRoot>
  )
})

Button.displayName = 'Button'
