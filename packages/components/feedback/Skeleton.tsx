import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { SkeletonRoot } from './Skeleton.style'
import type { SkeletonProps } from './Skeleton.types'

export const Skeleton = ({
  variant = 'text',
  width,
  height,
  sx,
  style,
  ...rest
}: SkeletonProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <SkeletonRoot
      $variant={variant}
      $width={width}
      $height={height}
      style={resolvedStyle}
      {...rest}
    />
  )
}

Skeleton.displayName = 'Skeleton'
