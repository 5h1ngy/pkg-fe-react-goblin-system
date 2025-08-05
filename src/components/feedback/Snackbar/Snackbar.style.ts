import styled from "styled-components"

export const SnackbarRoot = styled.div<{ $anchor: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'center' | 'right' } }>`
  position: fixed;
  ${({ $anchor }) => `${$anchor.vertical}: 1rem; ${$anchor.horizontal}: 1rem;`}
  min-width: 288px;
  max-width: 560px;
  background: ${({ theme }) => theme.palette.grey[900]};
  color: #fff;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows[16]};
  z-index: ${({ theme }) => theme.zIndex.snackbar};
`
