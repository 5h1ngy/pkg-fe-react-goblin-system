import styled, { css } from "styled-components"

export const StepperRoot = styled.div<{ $alternative?: boolean }>`
  display: flex;
  gap: 1rem;
  position: relative;
  ${({ $alternative }) =>
    $alternative &&
    css`
      align-items: flex-end;
    `}
`
