import styled from "styled-components"

export const PopoverSurface = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  box-shadow: ${({ theme }) => theme.shadows[8]};
  z-index: ${({ theme }) => theme.zIndex.modal};
  min-width: 200px;
`
