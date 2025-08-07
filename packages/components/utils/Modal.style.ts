import styled from "styled-components"

export const ModalSurface = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[Math.min(6, theme.shadows.length - 1)]};
  padding: ${({ theme }) => theme.spacing(3.2)};
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`
