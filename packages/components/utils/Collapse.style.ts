import styled from 'styled-components'

export const CollapseWrapper = styled.div<{ $height: number; $in: boolean; $timeout: number }>`
  overflow: hidden;
  transition: height ${({ $timeout }) => $timeout}ms ease;
  height: ${({ $height, $in }) => ($in ? `${$height}px` : '0')};
`
