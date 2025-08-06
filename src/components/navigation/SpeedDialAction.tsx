import type { SpeedDialActionProps } from './SpeedDial.types'
import { SpeedDialActionButton } from './SpeedDialAction.style'

export const SpeedDialAction = ({ icon, tooltipTitle, ...rest }: SpeedDialActionProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <span style={{ background: '#000', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: 4 }}>
      {tooltipTitle}
    </span>
    <SpeedDialActionButton {...rest}>{icon}</SpeedDialActionButton>
  </div>
)

SpeedDialAction.displayName = 'SpeedDialAction'
