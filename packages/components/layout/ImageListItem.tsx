import { forwardRef } from 'react'

import { useImageListContext } from './ImageList.hooks'

import { ImageListItemRoot } from './ImageListItem.style'
import type { ImageListItemProps } from './ImageListItem.types'

export const ImageListItem = forwardRef<HTMLLIElement, ImageListItemProps>(function ImageListItem(
  { cols = 1, rows = 1, ...rest },
  ref,
) {
  const { variant } = useImageListContext()

  return <ImageListItemRoot ref={ref} $variant={variant} $cols={cols} $rows={rows} {...rest} />
})

ImageListItem.displayName = 'ImageListItem'
