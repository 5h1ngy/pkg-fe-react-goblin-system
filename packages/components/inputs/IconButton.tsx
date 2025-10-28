import { forwardRef } from 'react'

import { useGoblinTheme } from '../../foundations'
import { mergeSx, resolveSx } from '../../system'

import { IconButtonRoot } from './IconButton.style'
import type { IconButtonProps } from './IconButton.types'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant = 'text', color = 'primary', size = 'medium', disableElevation, sx, style, ...rest },
  ref,
) {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(
    theme,
    mergeSx({ width: 40, height: 40, borderRadius: '50%', padding: 0 }, sx),
    style,
  )

  return (
    <IconButtonRoot
      ref={ref}
      $variant={variant}
      $color={color}
      $size={size}
      $fullWidth={false}
      $disableElevation={disableElevation}
      style={resolvedStyle}
      {...rest}
    />
  )
})

IconButton.displayName = 'IconButton'
