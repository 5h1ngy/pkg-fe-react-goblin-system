import styled from 'styled-components'

import type { DividerProps } from './Divider.types'

interface DividerStyleProps {
  $orientation: NonNullable<DividerProps['orientation']>
  $flex?: boolean
}

export const DividerRoot = styled.hr<DividerStyleProps>`
  border: none;
  border-top: ${({ theme, $orientation }) =>
    $orientation === 'horizontal' ? `1px solid ${theme.palette.divider}` : 'none'};
  border-left: ${({ theme, $orientation }) =>
    $orientation === 'vertical' ? `1px solid ${theme.palette.divider}` : 'none'};
  margin: ${({ $orientation }) => ($orientation === 'horizontal' ? '1rem 0' : '0 1rem')};
  align-self: ${({ $flex }) => ($flex ? 'stretch' : 'auto')};
`
