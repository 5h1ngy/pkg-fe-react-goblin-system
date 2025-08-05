import { HTMLAttributes } from "react"

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  completed?: boolean
  index: number
}
