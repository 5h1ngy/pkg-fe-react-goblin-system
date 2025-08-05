import styled from "styled-components"

export const PaginationRoot = styled.nav`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
`

export const PaginationButton = styled.button<{ $selected?: boolean }>`
  min-width: 36px;
  height: 36px;
  border-radius: 18px;
  border: none;
  background: ${({ $selected, theme }) => ($selected ? theme.palette.primary.main : 'transparent')};
  color: ${({ $selected, theme }) => ($selected ? theme.palette.primary.contrastText : theme.palette.text.primary)};
  cursor: pointer;
  font: inherit;
  padding: 0 0.5rem;

  &:hover {
    background: ${({ $selected, theme }) =>
      $selected ? theme.palette.primary.dark : theme.palette.action.hover};
  }
`
