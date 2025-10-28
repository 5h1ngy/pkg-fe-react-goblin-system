import { HTMLAttributes, ReactNode } from 'react'

export interface StepLabelProps extends HTMLAttributes<HTMLDivElement> {
  optional?: ReactNode
  children: ReactNode
  completed?: boolean
  active?: boolean
  icon?: ReactNode
}
