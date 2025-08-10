import styled from 'styled-components'

import type { SpeedDialProps } from './SpeedDial.types'

export const SpeedDialRoot = styled.div<{ $direction: SpeedDialProps['direction'] }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`

export const SpeedDialButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows[6]};
`

export const SpeedDialActions = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transform: ${({ $open }) => ($open ? 'scale(1)' : 'scale(0.9)')};
  transition: ${({ theme }) => theme.transitions.create(['opacity', 'transform'])};
`

export const SpeedDialActionButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  cursor: pointer;
`
