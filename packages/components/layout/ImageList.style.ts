import styled, { css } from 'styled-components'

import type { ImageListVariant } from './ImageList.types'

export const ImageListRoot = styled.ul<{
  $gap: string
  $cols: number
  $rowHeight?: number | 'auto'
  $variant: ImageListVariant
}>`
  list-style: none;
  padding: 0;
  margin: 0;
  ${({ $variant, $cols, $gap, $rowHeight }) =>
    $variant === 'masonry'
      ? css`
          column-count: ${$cols};
          column-gap: ${$gap};

          & > li {
            break-inside: avoid;
            margin-bottom: ${$gap};
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(${$cols}, minmax(0, 1fr));
          gap: ${$gap};
          ${$rowHeight && $rowHeight !== 'auto'
            ? css`
                grid-auto-rows: ${$rowHeight}px;
              `
            : ''}
        `}
`
