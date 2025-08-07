import { createContext, useContext } from 'react'

interface GridContextValue {
  spacing: number
  columns: number
}

export const GridContext = createContext<GridContextValue>({ spacing: 0, columns: 12 })

export const useGridContext = () => useContext(GridContext)
