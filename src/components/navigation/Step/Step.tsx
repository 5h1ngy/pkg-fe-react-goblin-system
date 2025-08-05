import { cloneElement, isValidElement } from "react"

import { useStepperContext } from '../Stepper/Stepper.context'
import { StepLabel } from '../StepLabel/StepLabel'
import type { StepLabelProps } from '../StepLabel/StepLabel.types'
import { StepRoot } from './Step.style'
import type { StepProps } from './Step.types'

export const Step = ({ index, completed, children, ...rest }: StepProps) => {
  const ctx = useStepperContext()
  const active = ctx ? ctx.activeStep === index : false
  const derivedCompleted = completed ?? (ctx ? ctx.activeStep > index : false)

  const content =
    isValidElement(children) && (children as React.ReactElement).type === StepLabel
      ? cloneElement(children as React.ReactElement<StepLabelProps>, {
          completed: derivedCompleted,
          active,
        })
      : children

  return (
    <StepRoot $completed={derivedCompleted} $active={active} {...rest}>
      {content}
    </StepRoot>
  )
}

Step.displayName = 'Step'
