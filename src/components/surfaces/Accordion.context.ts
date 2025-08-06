import { createContext, useContext } from "react"

interface AccordionContextValue {
  expanded: boolean
  toggle: (event: React.SyntheticEvent) => void
}

export const AccordionContext = createContext<AccordionContextValue | null>(null)

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error('Accordion subcomponents must be used within <Accordion>')
  }
  return ctx
}
