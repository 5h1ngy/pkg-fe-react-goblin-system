import styled from "styled-components"

export const MenuItemRoot = styled.li<{ $disabled?: boolean }>`
  padding: 0.5rem 1rem;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  &:hover {
    background: ${({ theme, $disabled }) => ($disabled ? 'inherit' : theme.palette.action.hover)};
  }
`
