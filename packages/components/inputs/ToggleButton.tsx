import { forwardRef } from 'react'

import { mergeSx } from '../../system'

import { Button } from './Button'
import type { ToggleButtonProps } from './ToggleButton.types'

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(
  { selected, value, sx, ...rest },
  ref,
) {
  return (
    <Button
      ref={ref}
      data-value={value}
      aria-pressed={selected}
      sx={mergeSx(
        { borderRadius: '999px' },
        selected ? { backgroundColor: 'rgba(0,0,0,0.08)' } : undefined,
        sx,
      )}
      {...rest}
    />
  )
})

ToggleButton.displayName = 'ToggleButton'
