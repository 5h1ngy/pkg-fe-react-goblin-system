import type { BadgeProps } from './Badge.types'
import { BadgeDot, BadgeWrapper } from './Badge.style'

export const Badge = ({ badgeContent, max = 99, color = 'default', children }: BadgeProps) => {
  const displayContent =
    typeof badgeContent === 'number' && badgeContent > max ? `${max}+` : badgeContent

  return (
    <BadgeWrapper>
      {children}
      <BadgeDot $color={color}>{displayContent}</BadgeDot>
    </BadgeWrapper>
  )
}

Badge.displayName = 'Badge'
