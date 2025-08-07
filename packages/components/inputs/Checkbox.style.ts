import styled from 'styled-components'

import { getColor } from './shared/color'
import type { ColorToken } from './shared/color'

export const CheckboxIcon = styled.span<{ $checked?: boolean; $color: ColorToken }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  transition: ${({ theme }) => theme.transitions.create(['background-color', 'border-color'])};
  background: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : 'transparent')};
  border-color: ${({ $checked, theme, $color }) => ($checked ? getColor(theme, $color).main : theme.palette.divider)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $color }) => getColor(theme, $color).contrastText};

  &::after {
    content: '';
    width: 6px;
    height: 12px;
    border: 2px solid currentColor;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`
