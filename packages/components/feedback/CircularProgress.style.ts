import styled, { css, keyframes } from 'styled-components'

const rotateKey = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const CircularProgressSvg = styled.svg<{ $variant: 'indeterminate' | 'determinate' }>`
  ${({ $variant }) =>
    $variant === 'indeterminate'
      ? css`
          animation: ${rotateKey} 1.4s linear infinite;
        `
      : css`
          animation: none;
        `}
`
