import { HTMLAttributes } from "react"

import type { TabsValue } from '../Tabs/Tabs.context'

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: TabsValue
  hidden?: boolean
}
