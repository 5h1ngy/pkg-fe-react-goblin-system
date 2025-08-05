import styled from "styled-components"

import { getSeverityColor } from '../shared/severity'
import type { AlertProps } from './Alert.types'

export const AlertRoot = styled.div<{
  $severity: NonNullable<AlertProps['severity']>
  $variant: NonNullable<AlertProps['variant']>
}>`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid transparent;
  background: ${({ theme, $severity, $variant }) => {
    const color = getSeverityColor(theme, $severity)
    if ($variant === 'filled') return color.main
    if ($variant === 'outlined') return 'transparent'
    return `${color.main}22`
  }};
  color: ${({ theme, $severity, $variant }) => {
    const color = getSeverityColor(theme, $severity)
    return $variant === 'filled' ? color.contrastText : color.main
  }};
  border-color: ${({ theme, $severity, $variant }) =>
    $variant === 'outlined' ? getSeverityColor(theme, $severity).main : 'transparent'};
`
