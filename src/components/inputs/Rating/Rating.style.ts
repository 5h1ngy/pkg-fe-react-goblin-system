import styled from 'styled-components'

import type { ButtonSize } from '../Button/Button.types'

export const RatingRoot = styled.div<{ $size: ButtonSize }>`
  display: inline-flex;
  gap: 0.25rem;
  font-size: ${({ $size }) =>
    $size === 'small' ? '1.25rem' : $size === 'large' ? '2rem' : '1.5rem'};
  color: ${({ theme }) => theme.palette.warning.main};
`
