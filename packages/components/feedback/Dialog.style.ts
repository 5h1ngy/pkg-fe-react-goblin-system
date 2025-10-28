import styled from 'styled-components'

export const DialogContainer = styled.div<{
  $fullWidth?: boolean
  $maxWidth: NonNullable<'xs' | 'sm' | 'md' | 'lg'>
}>`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  max-width: ${({ theme, $maxWidth }) => `${theme.breakpoints.values[$maxWidth]}px`};
  box-shadow: ${({ theme }) => theme.shadows[Math.min(6, theme.shadows.length - 1)]};
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(18px);
`
