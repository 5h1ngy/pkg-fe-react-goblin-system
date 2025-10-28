import styled, { css } from 'styled-components'

export const TooltipBubble = styled.span<{ $placement: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  ${({ $placement }) => {
    switch ($placement) {
      case 'bottom':
        return css`
          top: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `
      case 'left':
        return css`
          right: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `
      case 'right':
        return css`
          left: calc(100% + 0.25rem);
          top: 50%;
          transform: translateY(-50%);
        `
      case 'top':
      default:
        return css`
          bottom: calc(100% + 0.25rem);
          left: 50%;
          transform: translateX(-50%);
        `
    }
  }}
`
