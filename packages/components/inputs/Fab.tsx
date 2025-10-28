import { forwardRef } from 'react'

import { mergeSx } from '../../system'

import { Button } from './Button'
import type { FabProps } from './Fab.types'

export const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { size = 'medium', sx, color = 'secondary', variant = 'contained', disableElevation, ...rest },
  ref,
) {
  const dimension = size === 'small' ? 40 : size === 'large' ? 72 : 56
  const baseSx = { width: dimension, height: dimension, borderRadius: '50%', padding: 0 }

  return (
    <Button
      ref={ref}
      variant={variant}
      color={color}
      disableElevation={disableElevation}
      size={size}
      sx={mergeSx(baseSx, sx)}
      {...rest}
    />
  )
})

Fab.displayName = 'Fab'
