import { ButtonHTMLAttributes, ReactNode } from "react"

import { SxProps } from '../../system'
import type { TabsValue } from './Tabs.context'

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode
  value?: TabsValue
  icon?: ReactNode
  sx?: SxProps
}
