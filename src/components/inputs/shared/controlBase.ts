import styled from 'styled-components'

export const ControlRoot = styled.span<{ $size: 'small' | 'medium'; $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'small' ? 32 : 40)}px;
  height: ${({ $size }) => ($size === 'small' ? 32 : 40)}px;
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
`
