import styled from "styled-components"

export const AccordionRoot = styled.div<{ $disabled?: boolean; $expanded?: boolean }>`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: ${({ theme }) => theme.palette.background.paper};
  overflow: hidden;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`
