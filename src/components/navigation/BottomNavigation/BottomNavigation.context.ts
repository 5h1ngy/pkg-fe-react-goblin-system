import { createContext, useContext } from "react"

export interface BottomNavigationContextValue {
  value: string | number
  onChange: (event: React.MouseEvent<HTMLElement>, value: string | number) => void
}

export const BottomNavigationContext = createContext<BottomNavigationContextValue | null>(null)

export const useBottomNavigationContext = () => {
  const ctx = useContext(BottomNavigationContext)
  if (!ctx) {
    throw new Error('BottomNavigationAction must be used within BottomNavigation')
  }
  return ctx
}
