import styled from 'styled-components'

export const StepLabelRoot = styled.div<{ $completed?: boolean; $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme, $active, $completed }) =>
    $active || $completed ? theme.palette.primary.main : theme.palette.text.secondary};
`

export const StepIcon = styled.span<{ $completed?: boolean; $active?: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid
    ${({ theme, $active }) => ($active ? theme.palette.primary.main : theme.palette.divider)};
  display: grid;
  place-items: center;
  background: ${({ theme, $completed }) =>
    $completed ? theme.palette.primary.main : 'transparent'};
  color: ${({ theme, $completed }) =>
    $completed ? theme.palette.primary.contrastText : theme.palette.text.secondary};
`
