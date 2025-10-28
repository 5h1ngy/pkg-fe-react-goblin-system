import styled from 'styled-components'

export const SnackbarRoot = styled.div<{
  $anchor: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'center' | 'right' }
}>`
  position: fixed;
  ${({ $anchor, theme }) =>
    `${$anchor.vertical}: ${theme.spacing(3)}; ${$anchor.horizontal}: ${theme.spacing(3)};`}
  min-width: 288px;
  max-width: 560px;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  border-radius: ${({ theme }) => theme.shape.borderRadius + 4}px;
  padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(2.4)}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.2)};
  box-shadow: ${({ theme }) => theme.shadows[Math.min(4, theme.shadows.length - 1)]};
  z-index: ${({ theme }) => theme.zIndex.snackbar};
`
