import styled, { css } from 'styled-components'

import type { ImageListVariant } from '../ImageList/ImageList.types'

export const ImageListItemRoot = styled.li<{
  $variant: ImageListVariant
  $cols: number
  $rows: number
}>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${({ $variant, $cols, $rows }) =>
    $variant !== 'masonry' &&
    css`
      grid-column: span ${$cols};
      grid-row: span ${$rows};
    `}
`
