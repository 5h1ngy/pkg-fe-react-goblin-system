import styled from "styled-components"

export const MenuItemRoot = styled.li<{ $disabled?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(2.4)}`};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  &:hover {
    background: ${({ theme, $disabled }) => ($disabled ? 'inherit' : theme.palette.action.hover)};
  }
`
