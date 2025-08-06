import styled from 'styled-components'

export const CardActionsRoot = styled.div<{ $disableSpacing?: boolean }>`
  display: flex;
  gap: ${({ $disableSpacing }) => ($disableSpacing ? 0 : '0.5rem')};
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`
