import styled from 'styled-components'

import type { BadgeProps } from './Badge.types'

type BadgeColor = NonNullable<BadgeProps['color']>

export const BadgeWrapper = styled.span`
  position: relative;
  display: inline-flex;
`

export const BadgeDot = styled.span<{ $color: BadgeColor }>`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${({ theme, $color }) => {
    switch ($color) {
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'error':
        return theme.palette.error.main
      default:
        return theme.palette.grey[500]
    }
  }};
  color: #fff;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
`
