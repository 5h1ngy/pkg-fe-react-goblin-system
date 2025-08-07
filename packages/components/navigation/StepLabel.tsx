import { CheckIcon, CircleIcon } from '../../foundations'
import { StepIcon, StepLabelRoot } from './StepLabel.style'
import type { StepLabelProps } from './StepLabel.types'

export const StepLabel = ({ children, optional, completed, active, icon, ...rest }: StepLabelProps) => {
  const defaultIcon = completed ? <CheckIcon size={18} aria-hidden /> : <CircleIcon size={18} aria-hidden />

  return (
    <StepLabelRoot $completed={completed} $active={active} {...rest}>
      <StepIcon $completed={completed} $active={active}>{icon ?? defaultIcon}</StepIcon>
      <span>{children}</span>
      {optional && <small>{optional}</small>}
    </StepLabelRoot>
  )
}

StepLabel.displayName = 'StepLabel'