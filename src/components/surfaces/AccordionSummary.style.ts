import styled from "styled-components"

export const AccordionSummaryRoot = styled.button<{ $expanded?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  padding: 1rem;
  cursor: pointer;
  font: inherit;

  svg {
    transition: ${({ theme }) => theme.transitions.create(['transform'])};
    transform: rotate(${({ $expanded }) => ($expanded ? 180 : 0)}deg);
  }
`
