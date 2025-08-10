import styled from 'styled-components'

export const MenuRoot = styled.ul`
  position: absolute;
  min-width: 180px;
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(0.6)} 0`};
  list-style: none;
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[Math.min(4, theme.shadows.length - 1)]};
  z-index: ${({ theme }) => theme.zIndex.modal};
`
