import styled from 'styled-components'

export const ButtonGroupRoot = styled.div<{ $orientation: 'horizontal' | 'vertical'; $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  & > button {
    border-radius: 0;
  }

  & > button:first-child {
    border-top-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : theme.shape.borderRadius}px;
    border-bottom-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? 0 : theme.shape.borderRadius}px;
    border-top-right-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : 0}px;
  }

  & > button:last-child {
    border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    border-bottom-right-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : theme.shape.borderRadius}px;
    border-bottom-left-radius: ${({ $orientation, theme }) =>
      $orientation === 'vertical' ? theme.shape.borderRadius : 0}px;
  }
`
