import styled from 'styled-components'

export const StepRoot = styled.div<{ $completed?: boolean; $active?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    right: -50%;
    height: 2px;
    background: ${({ theme }) => theme.palette.divider};
  }

  &:last-child::after {
    display: none;
  }
`
