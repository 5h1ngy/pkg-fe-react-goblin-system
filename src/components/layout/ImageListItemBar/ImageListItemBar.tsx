import { ImageListItemBarContent, ImageListItemBarRoot } from './ImageListItemBar.style'
import type { ImageListItemBarProps } from './ImageListItemBar.types'

export const ImageListItemBar = ({ title, subtitle, position = 'bottom', actionIcon, ...rest }: ImageListItemBarProps) => (
  <ImageListItemBarRoot $position={position} {...rest}>
    <ImageListItemBarContent>
      <span>{title}</span>
      {subtitle && <small>{subtitle}</small>}
    </ImageListItemBarContent>
    {actionIcon}
  </ImageListItemBarRoot>
)

ImageListItemBar.displayName = 'ImageListItemBar'
