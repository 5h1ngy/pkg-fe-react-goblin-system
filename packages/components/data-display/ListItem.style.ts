import styled from 'styled-components'

export const ListItemRoot = styled.li<{ $divider?: boolean; $button?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: ${({ $divider, theme }) =>
    $divider ? `1px solid ${theme.palette.divider}` : 'none'};
  cursor: ${({ $button }) => ($button ? 'pointer' : 'default')};

  &:hover {
    background: ${({ $button, theme }) => ($button ? theme.palette.action.hover : 'transparent')};
  }
`
