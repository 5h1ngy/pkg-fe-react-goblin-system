import styled from 'styled-components'

export const Canvas = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => `${theme.gradients.fog}, ${theme.gradients.background}`};
  position: relative;
  overflow: hidden;
`
