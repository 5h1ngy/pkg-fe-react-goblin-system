import styled from 'styled-components'

export const CardActionsRoot = styled.div<{ $disableSpacing?: boolean }>`
  display: flex;
  gap: ${({ theme, $disableSpacing }) => ($disableSpacing ? 0 : theme.spacing(1.4))};
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing(2.4)};
`
