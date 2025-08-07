import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.zIndex.drawer - 1};
`
