import { CloseIcon, useMaterialTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { ChipRoot } from './Chip.style'
import type { ChipProps } from './Chip.types'

export const Chip = ({ label, onDelete, color = 'default', variant = 'filled', sx, style, ...rest }: ChipProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <ChipRoot $color={color} $variant={variant} style={resolvedStyle} {...rest}>
      {label}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
          aria-label="Delete"
        >
          <CloseIcon size={16} aria-hidden />
        </button>
      )}
    </ChipRoot>
  )
}

Chip.displayName = 'Chip'
