import styled from 'styled-components'

export const TableCellRoot = styled.td<{ $variant?: 'head' | 'body' | 'footer' }>`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: ${({ $variant }) => ($variant === 'head' ? 600 : 400)};
`
