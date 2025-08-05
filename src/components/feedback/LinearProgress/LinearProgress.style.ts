import styled, { keyframes } from "styled-components"

const indeterminateKey = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(100%); }
`

export const LinearProgressRoot = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.palette.grey[200]};
  overflow: hidden;
`

export const LinearProgressBar = styled.span<{ $value?: number; $variant: 'determinate' | 'indeterminate' }>`
  display: block;
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  transform-origin: left;
  ${({ $variant, $value }) =>
    $variant === 'determinate'
      ? `width: ${$value ?? 0}%;`
      : `width: 50%; animation: ${indeterminateKey} 1.2s infinite;`}
`
