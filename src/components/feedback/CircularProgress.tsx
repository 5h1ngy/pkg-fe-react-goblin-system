import { useMaterialTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { CircularProgressSvg } from './CircularProgress.style'
import type { CircularProgressProps } from './CircularProgress.types'

export const CircularProgress = ({
  size = 48,
  thickness = 4,
  value = 0,
  variant = 'indeterminate',
  sx,
  style,
  ...rest
}: CircularProgressProps) => {
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div style={{ width: size, height: size, ...resolvedStyle }} {...rest}>
      <CircularProgressSvg $variant={variant} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme.palette.grey[200]}
          strokeWidth={thickness}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={variant === 'determinate' ? offset : circumference * 0.75}
          strokeLinecap="round"
        />
      </CircularProgressSvg>
    </div>
  )
}

CircularProgress.displayName = 'CircularProgress'
