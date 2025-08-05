import styled, { css } from "styled-components"

export const CardMediaRoot = styled.div<{ $image?: string }>`
  width: 100%;
  min-height: 200px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
    `}
`
