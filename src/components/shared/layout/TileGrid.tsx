import styled from 'styled-components'

export const TileGrid = styled.div<{ $min?: string; $gap?: string }>`
  display: grid;
  gap: ${({ $gap }) => $gap ?? '1.5rem'};
  grid-template-columns: repeat(auto-fit, minmax(${({ $min }) => $min ?? '220px'}, 1fr));
`
