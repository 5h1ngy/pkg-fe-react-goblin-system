import styled from 'styled-components'

export const ImageListItemBarRoot = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  left: 0;
  right: 0;
  ${({ $position }) => ($position === 'top' ? 'top: 0;' : 'bottom: 0;')}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    ${({ $position }) => ($position === 'top' ? '180deg' : '0deg')},
    rgba(0, 0, 0, 0.6) 0%,
    transparent 100%
  );
  color: #fff;
`

export const ImageListItemBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`
