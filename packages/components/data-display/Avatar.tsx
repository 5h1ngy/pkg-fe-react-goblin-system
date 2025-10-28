import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { AvatarRoot } from './Avatar.style'
import type { AvatarProps } from './Avatar.types'

export const Avatar = ({
  src,
  alt,
  variant = 'circular',
  children,
  sx,
  style,
  ...rest
}: AvatarProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AvatarRoot $variant={variant} style={resolvedStyle} {...rest}>
      {src ? <img src={src} alt={alt} /> : children}
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar'
