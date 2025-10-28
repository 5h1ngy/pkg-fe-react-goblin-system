import styled from 'styled-components'

export const SpeedDialActionButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  cursor: pointer;
`
