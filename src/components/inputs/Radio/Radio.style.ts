import styled from 'styled-components'

import { getColor } from '../shared/color'
import type { ColorToken } from '../shared/color'

export const RadioIcon = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  display: grid;
  place-items: center;
  transition: ${({ theme }) => theme.transitions.create(['border-color'])};
  border-color: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : theme.palette.divider)};

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme, $color }) => getColor(theme, $color).main};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`
