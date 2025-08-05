import { HTMLAttributes, ReactNode } from "react"

import { SxProps } from '../../../system'
import type { Severity } from '../shared/severity'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  severity?: Severity
  variant?: 'standard' | 'outlined' | 'filled'
  action?: ReactNode
  icon?: ReactNode
  onClose?: () => void
  sx?: SxProps
}
