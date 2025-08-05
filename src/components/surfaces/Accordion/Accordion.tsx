import { useState } from "react"

import { useMaterialTheme } from '../../../foundations'
import { resolveSx } from '../../../system'

import { AccordionContext } from './Accordion.context'
import { AccordionRoot } from './Accordion.style'
import type { AccordionProps } from './Accordion.types'

export const Accordion = ({ expanded, defaultExpanded = false, onChange, disabled, children, sx, style, ...rest }: AccordionProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
  const isExpanded = expanded ?? internalExpanded
  const theme = useMaterialTheme()
  const resolvedStyle = resolveSx(theme, sx, style)

  const toggle = (event: React.SyntheticEvent) => {
    if (disabled) return
    const next = !isExpanded
    setInternalExpanded(next)
    onChange?.(event, next)
  }

  return (
    <AccordionContext.Provider value={{ expanded: isExpanded, toggle }}>
      <AccordionRoot $disabled={disabled} $expanded={isExpanded} style={resolvedStyle} {...rest}>
        {children}
      </AccordionRoot>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'
