import type { CardMediaProps } from './CardMedia.types'
import { CardMediaRoot } from './CardMedia.style'

export const CardMedia = ({ image, component = 'div', children, ...rest }: CardMediaProps) => {
  if (component === 'img' || component === 'video') {
    const Component = component
    return <Component src={image} style={{ width: '100%', borderRadius: 8, display: 'block' }} {...rest} {...(component === 'video' ? { controls: true } : {})} />
  }

  return (
    <CardMediaRoot $image={image} {...rest}>
      {children}
    </CardMediaRoot>
  )
}

CardMedia.displayName = 'CardMedia'
