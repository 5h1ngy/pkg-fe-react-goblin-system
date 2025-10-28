import styled from 'styled-components'

export const TabButton = styled.button<{ $selected?: boolean }>`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0.75rem 1.25rem;
  font: inherit;
  cursor: pointer;
  position: relative;
  color: ${({ theme, $selected }) =>
    $selected ? theme.palette.text.primary : theme.palette.text.secondary};
  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    border-radius: 3px 3px 0 0;
    background: ${({ theme }) => theme.palette.primary.main};
    opacity: ${({ $selected }) => ($selected ? 1 : 0)};
    transform: scaleX(${({ $selected }) => ($selected ? 1 : 0.4)});
    transition: ${({ theme }) => theme.transitions.create(['opacity', 'transform'])};
  }
`
