import styled from "styled-components"

export const ModalSurface = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[24] ?? theme.shadows[theme.shadows.length - 1]};
  padding: 1.5rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`
