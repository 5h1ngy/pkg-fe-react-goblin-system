import { StepIcon, StepLabelRoot } from './StepLabel.style'
import type { StepLabelProps } from './StepLabel.types'

export const StepLabel = ({ children, optional, completed, active, icon, ...rest }: StepLabelProps) => (
  <StepLabelRoot $completed={completed} $active={active} {...rest}>
    <StepIcon $completed={completed} $active={active}>{icon ?? (completed ? '?' : '•')}</StepIcon>
    <span>{children}</span>
    {optional && <small>{optional}</small>}
  </StepLabelRoot>
)

StepLabel.displayName = 'StepLabel'
