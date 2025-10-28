import { createContext, useContext } from 'react'

export type TabsValue = number | string

export interface TabsContextValue {
  value: TabsValue
  onChange: (event: React.MouseEvent<HTMLElement>, value: TabsValue) => void
  variant: 'standard' | 'scrollable' | 'fullWidth'
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export const useTabsContext = () => {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error('Tab components must be used within <Tabs>')
  }
  return ctx
}
