import styled from "styled-components"

export const BottomNavigationRoot = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.25rem;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[8]};
`
