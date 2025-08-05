import styled from "styled-components"

import { getIntentColor } from '../shared/intentColor'
import type { AppBarProps } from './AppBar.types'

export const AppBarRoot = styled.header<{
  $position: AppBarProps['position']
  $color: AppBarProps['color']
  $elevation: number
}>`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme, $color }) =>
    $color === 'transparent' ? 'transparent' : getIntentColor(theme, $color ?? 'primary').main};
  color: ${({ theme, $color }) =>
    $color === 'transparent' ? theme.palette.text.primary : getIntentColor(theme, $color ?? 'primary').contrastText};
  position: ${({ $position }) => $position ?? 'fixed'};
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.appBar};
  box-shadow: ${({ theme, $elevation }) => theme.shadows[Math.min($elevation, theme.shadows.length - 1)]};
`
