import styled from 'styled-components'

export const Split = styled.div<{ $align?: 'start' | 'center'; $gap?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ $gap }) => $gap ?? 'clamp(2rem, 4vw, 3rem)'};
  align-items: ${({ $align }) => ($align ?? 'center') === 'start' ? 'flex-start' : 'center'};
`
