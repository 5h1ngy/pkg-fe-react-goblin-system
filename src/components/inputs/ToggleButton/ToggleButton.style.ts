import styled, { css } from 'styled-components'

import { ButtonRoot } from '../Button/Button.style'

export const ToggleButtonRoot = styled(ButtonRoot)<{ $selected?: boolean }>`
  ${({ $selected, theme }) =>
    $selected &&
    css`
      background: ${theme.palette.action?.selected ?? theme.palette.primary.main}22;
      border-color: ${theme.palette.primary.main};
    `}
`
