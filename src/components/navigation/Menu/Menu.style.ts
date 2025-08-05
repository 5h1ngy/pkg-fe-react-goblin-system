import styled from "styled-components"

export const MenuRoot = styled.ul`
  position: absolute;
  min-width: 180px;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[6]};
  z-index: ${({ theme }) => theme.zIndex.modal};
`
