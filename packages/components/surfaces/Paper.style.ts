import styled from "styled-components"

import type { PaperProps } from './Paper.types'

export const PaperRoot = styled.div<{
  $elevation: number
  $variant: PaperProps['variant']
  $square?: boolean
}>`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme, $square }) => ($square ? 0 : theme.shape.borderRadius)}px;
  padding: ${({ theme }) => theme.spacing(3)};
  border: ${({ $variant, theme }) =>
    $variant === 'outlined'
      ? `1px solid ${theme.palette.divider}`
      : `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'}`};
  box-shadow: ${({ $variant, theme, $elevation }) =>
    $variant === 'elevation'
      ? theme.shadows[Math.min($elevation, theme.shadows.length - 1)]
      : 'none'};
  transition: ${({ theme }) => theme.transitions.create(['box-shadow'])};
`
