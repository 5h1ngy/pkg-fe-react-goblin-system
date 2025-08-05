import styled from 'styled-components'

export const AutocompleteMenu = styled.ul`
  list-style: none;
  margin: 0.25rem 0 0;
  padding: 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  max-height: 220px;
  overflow-y: auto;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;

  li {
    padding: 0.5rem 0.75rem;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.palette.action?.hover ?? theme.palette.grey[100]};
    }
  }
`
