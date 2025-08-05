import { HTMLAttributes } from "react"

import { SxProps } from '../../../system'
import type { TabsValue } from './Tabs.context'

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: TabsValue
  defaultValue?: TabsValue
  onChange?: (event: React.MouseEvent<HTMLElement>, value: TabsValue) => void
  variant?: 'standard' | 'scrollable' | 'fullWidth'
  sx?: SxProps
}
