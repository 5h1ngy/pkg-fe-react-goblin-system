import { useGoblinTheme } from '../../foundations'
import { resolveSx } from '../../system'

import { AlertRoot } from './Alert.style'
import type { AlertProps } from './Alert.types'

export const Alert = ({
  severity = 'success',
  variant = 'standard',
  action,
  icon,
  onClose,
  children,
  sx,
  style,
  ...rest
}: AlertProps) => {
  const theme = useGoblinTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  return (
    <AlertRoot $severity={severity} $variant={variant} role="alert" style={resolvedStyle} {...rest}>
      {icon}
      <div style={{ flex: 1 }}>{children}</div>
      {action}
      {onClose && (
        <button
          onClick={onClose}
          style={{ border: 'none', background: 'transparent', color: 'inherit' }}
        ></button>
      )}
    </AlertRoot>
  )
}

Alert.displayName = 'Alert'
