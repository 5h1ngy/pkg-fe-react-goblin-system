import styled from 'styled-components'

export const AccordionSummaryRoot = styled.button<{ $expanded?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(2.6)}`};
  cursor: pointer;
  font: inherit;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  &:hover {
    background: ${({ theme }) => theme.palette.action.hover};
  }

  svg {
    transition: ${({ theme }) => theme.transitions.create(['transform'])};
    transform: rotate(${({ $expanded }) => ($expanded ? 180 : 0)}deg);
  }
`
