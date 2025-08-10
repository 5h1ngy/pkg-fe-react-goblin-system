import styled from 'styled-components'

export const BottomNavigationButton = styled.button<{ $selected?: boolean }>`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  color: ${({ theme, $selected }) =>
    $selected ? theme.palette.primary.main : theme.palette.text.secondary};
`
