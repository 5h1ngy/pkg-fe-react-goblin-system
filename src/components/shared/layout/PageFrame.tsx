import styled from 'styled-components'

export const PageFrame = styled.div`
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 2.5rem));
  margin: 0 auto;
  padding: clamp(5rem, 10vw, 6.5rem) clamp(1.5rem, 4vw, 3rem) 4rem;
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 4.5rem);
`
