import styled from 'styled-components'

import type { GoblinTheme } from '../../foundations'
import type { ChipColor, ChipProps } from './Chip.types'

const getChipColors = (theme: GoblinTheme, color: ChipColor) => {
  if (color === 'default') {
    return {
      main: theme.palette.grey[300],
      contrastText: theme.palette.text.primary,
      border: theme.palette.grey[400],
    }
  }

  const palette = theme.palette[color]
  return {
    main: palette.main,
    contrastText: palette.contrastText,
    border: palette.main,
  }
}

export const ChipRoot = styled.div<{
  $color: ChipColor
  $variant: NonNullable<ChipProps['variant']>
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.9)};
  padding: ${({ theme }) => `${theme.spacing(0.8)} ${theme.spacing(1.8)}`};
  border-radius: 999px;
  font-size: 0.875rem;
  border: 1px solid transparent;
  background: ${({ theme, $color, $variant }) => {
    const palette = getChipColors(theme, $color)
    return $variant === 'filled' ? palette.main : 'transparent'
  }};
  color: ${({ theme, $color, $variant }) => {
    const palette = getChipColors(theme, $color)
    return $variant === 'filled' ? palette.contrastText : palette.main
  }};
  border-color: ${({ theme, $color, $variant }) =>
    $variant === 'outlined' ? getChipColors(theme, $color).border : 'transparent'};
`
