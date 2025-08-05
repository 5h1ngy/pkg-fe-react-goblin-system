import styled from 'styled-components'

import { getColor } from '../shared/color'
import type { ColorToken } from '../shared/color'

export const SwitchTrack = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 36px;
  height: 20px;
  border-radius: 999px;
  background: ${({ $checked, theme, $color }) =>
    $checked ? getColor(theme, $color).main : theme.palette.grey[400]};
  position: relative;
  transition: ${({ theme }) => theme.transitions.create(['background-color'])};
`

export const SwitchThumb = styled.span<{ $checked?: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? '18px' : '2px')};
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: ${({ theme }) => theme.transitions.create(['left'])};
`
