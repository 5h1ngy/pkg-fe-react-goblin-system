import styled from 'styled-components'

export const CardHeaderRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${({ theme }) => theme.spacing(1)};
`
