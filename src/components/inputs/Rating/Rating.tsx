import { MouseEvent, useState } from 'react'

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { RatingRoot } from './Rating.style'
import type { RatingProps } from './Rating.types'

export const Rating = ({
  max = 5,
  precision = 1,
  value,
  defaultValue = 0,
  readOnly,
  onChange,
  size = 'medium',
  icon = '?',
  emptyIcon = '?',
  sx,
  style,
  className,
}: RatingProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const [internal, setInternal] = useState(defaultValue)

  const currentValue = value ?? internal

  const handleClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    if (readOnly) return

    const newValue = (index + 1) * precision
    setInternal(newValue)
    onChange?.(event, newValue)
  }

  return (
    <RatingRoot $size={size} style={resolvedStyle} className={className}>
      {Array.from({ length: max }).map((_, index) => {
        const filled = index + 1 <= currentValue
        return (
          <button
            key={index}
            type="button"
            onClick={(event) => handleClick(event, index)}
            disabled={readOnly}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: readOnly ? 'default' : 'pointer',
              color: filled ? theme.palette.warning.main : theme.palette.grey[400],
            }}
          >
            {filled ? icon : emptyIcon}
          </button>
        )
      })}
    </RatingRoot>
  )
}

Rating.displayName = 'Rating'
