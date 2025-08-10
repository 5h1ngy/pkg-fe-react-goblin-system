import { HTMLAttributes } from 'react'

import type { TabsValue } from './Tabs.context'

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: TabsValue
  hidden?: boolean
}
