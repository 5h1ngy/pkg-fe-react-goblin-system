import styled from 'styled-components'

export const BottomNavigationRoot = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing(0.8)};
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[Math.min(3, theme.shadows.length - 1)]};
`
