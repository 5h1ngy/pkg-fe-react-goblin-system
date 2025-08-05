import styled, { css } from 'styled-components'

import { getColor } from '../shared/color'
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'

interface ButtonStyleProps {
  $variant: ButtonVariant
  $color: ButtonProps['color']
  $size: ButtonSize
  $fullWidth?: boolean
  $disableElevation?: boolean
}

const buttonPadding: Record<ButtonSize, string> = {
  small: '0.25rem 0.75rem',
  medium: '0.5rem 1.25rem',
  large: '0.75rem 1.5rem',
}

export const ButtonRoot = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid transparent;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ $size }) =>
    $size === 'small' ? '0.8125rem' : $size === 'large' ? '0.9375rem' : '0.875rem'};
  padding: ${({ $size }) => buttonPadding[$size]};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['background-color', 'box-shadow', 'transform'])};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme, $color }) => {
    const palette = getColor(theme, $color ?? 'primary')

    switch ($variant) {
      case 'outlined':
        return css`
          border-color: ${palette.main};
          color: ${palette.main};
          background: transparent;

          &:hover {
            background: ${palette.main}14;
          }
        `
      case 'contained':
        return css`
          background: ${palette.main};
          color: ${palette.contrastText};
          border-color: ${palette.main};

          &:hover {
            background: ${palette.dark};
            transform: translateY(-1px);
          }
        `
      default:
        return css`
          background: transparent;
          color: ${palette.main};

          &:hover {
            background: ${palette.main}14;
          }
        `
    }
  }}

  ${({ $variant, $disableElevation, theme }) =>
    $variant === 'contained' &&
    css`
      box-shadow: ${$disableElevation ? 'none' : theme.shadows[2]};

      &:hover {
        box-shadow: ${$disableElevation ? 'none' : theme.shadows[3]};
      }
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`
