import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`

export const SkeletonRoot = styled.span<{
  $variant: 'text' | 'rectangular' | 'circular'
  $width?: number | string
  $height?: number | string
}>`
  display: block;
  background: linear-gradient(90deg, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.15) 37%, rgba(0,0,0,0.08) 63%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.4s ease infinite;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width ?? '100%')};
  height: ${({ $height, $variant }) =>
    $variant === 'text' ? '1em' : typeof $height === 'number' ? `${$height}px` : $height ?? '100px'};
  border-radius: ${({ $variant }) => ($variant === 'circular' ? '50%' : '4px')};
`
