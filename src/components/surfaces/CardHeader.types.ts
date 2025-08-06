import { HTMLAttributes, ReactNode } from "react"

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  avatar?: ReactNode
  title: ReactNode
  subheader?: ReactNode
  action?: ReactNode
}
