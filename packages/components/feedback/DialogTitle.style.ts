import styled from 'styled-components'

export const DialogTitleRoot = styled.h2`
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(2.2)} ${theme.spacing(3)} ${theme.spacing(1)}`};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
`
