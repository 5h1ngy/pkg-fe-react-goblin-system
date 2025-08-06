import { forwardRef } from 'react'

import { useMaterialTheme } from '../../foundations'

import { ImageListContext } from './ImageList.hooks'
import { ImageListRoot } from './ImageList.style'
import type { ImageListProps } from './ImageList.types'

export const ImageList = forwardRef<HTMLUListElement, ImageListProps>(function ImageList(
  { cols = 3, gap = 2, rowHeight = 164, variant = 'standard', children, ...rest },
  ref,
) {
  const theme = useMaterialTheme()
  const gapValue = theme.spacing(gap)

  const list = (
    <ImageListRoot
      ref={ref}
      $gap={gapValue}
      $cols={cols}
      $rowHeight={rowHeight}
      $variant={variant}
      {...rest}
    >
      {children}
    </ImageListRoot>
  )

  return <ImageListContext.Provider value={{ variant }}>{list}</ImageListContext.Provider>
})

ImageList.displayName = 'ImageList'
