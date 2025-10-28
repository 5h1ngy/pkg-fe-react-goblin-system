import { createContext, useContext } from 'react'

import type { ImageListVariant } from './ImageList.types'

interface ImageListContextValue {
  variant: ImageListVariant
}

export const ImageListContext = createContext<ImageListContextValue>({ variant: 'standard' })

export const useImageListContext = () => useContext(ImageListContext)
