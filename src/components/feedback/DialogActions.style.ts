import styled from "styled-components"

export const DialogActionsRoot = styled.div`
  padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(3)} ${theme.spacing(2.4)}`};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(1.2)};
`
