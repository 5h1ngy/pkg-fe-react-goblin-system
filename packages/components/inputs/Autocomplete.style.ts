import styled from 'styled-components'

export const AutocompleteMenu = styled.ul`
  list-style: none;
  margin: ${({ theme }) => `${theme.spacing(0.6)} 0 0`};
  padding: 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  max-height: 220px;
  overflow-y: auto;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[Math.min(3, theme.shadows.length - 1)]};
  position: absolute;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};

  li {
    padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(2.2)}`};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.palette.action.hover};
    }
  }
`
