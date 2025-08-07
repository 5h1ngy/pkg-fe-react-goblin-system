import { StepperContext } from './Stepper.context'
import { StepperRoot } from './Stepper.style'
import type { StepperProps } from './Stepper.types'

export const Stepper = ({ activeStep = 0, alternativeLabel, children, ...rest }: StepperProps) => (
  <StepperContext.Provider value={{ activeStep, alternativeLabel }}>
    <StepperRoot $alternative={alternativeLabel} {...rest}>
      {children}
    </StepperRoot>
  </StepperContext.Provider>
)

Stepper.displayName = 'Stepper'
