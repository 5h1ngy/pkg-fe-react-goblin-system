import { HTMLAttributes } from 'react'

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  activeStep?: number
  alternativeLabel?: boolean
}
