import { createContext, useContext } from 'react'

export interface StepperContextValue {
  activeStep: number
  alternativeLabel?: boolean
}

export const StepperContext = createContext<StepperContextValue | null>(null)

export const useStepperContext = () => {
  const ctx = useContext(StepperContext)
  if (!ctx) {
    throw new Error('Step components must be used within <Stepper>')
  }
  return ctx
}
