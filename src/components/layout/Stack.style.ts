import styled from 'styled-components'

interface StackStyleProps {
  $direction: string
  $gap: string
  $alignItems?: string
  $justifyContent?: string
}

export const StackRoot = styled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
`
