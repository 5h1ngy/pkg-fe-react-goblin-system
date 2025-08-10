import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { PaperRoot } from './Paper.style'
import type { PaperProps } from './Paper.types'

export const Paper = ({
  elevation = 1,
  variant = 'elevation',
  square,
  sx,
  style,
  ...rest
}: PaperProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <PaperRoot
      $elevation={elevation}
      $variant={variant}
      $square={square}
      style={resolvedStyle}
      {...rest}
    />
  )
}

Paper.displayName = 'Paper'
