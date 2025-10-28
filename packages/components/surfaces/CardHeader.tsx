import { CardHeaderRoot } from './CardHeader.style'
import type { CardHeaderProps } from './CardHeader.types'

export const CardHeader = ({ avatar, title, subheader, action, ...rest }: CardHeaderProps) => (
  <CardHeaderRoot {...rest}>
    {avatar}
    <div style={{ flex: 1 }}>
      <strong>{title}</strong>
      {subheader && (
        <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.875rem' }}>{subheader}</div>
      )}
    </div>
    {action}
  </CardHeaderRoot>
)

CardHeader.displayName = 'CardHeader'
