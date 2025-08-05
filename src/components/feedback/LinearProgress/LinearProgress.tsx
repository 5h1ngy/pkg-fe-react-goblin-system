import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { LinearProgressBar, LinearProgressRoot } from './LinearProgress.style'
import type { LinearProgressProps } from './LinearProgress.types'

export const LinearProgress = ({ variant = 'indeterminate', value, sx, style, ...rest }: LinearProgressProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <LinearProgressRoot style={resolvedStyle} {...rest}>
      <LinearProgressBar $variant={variant} $value={value} />
    </LinearProgressRoot>
  )
}

LinearProgress.displayName = 'LinearProgress'
