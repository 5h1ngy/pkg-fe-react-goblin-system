import { ExpandMoreIcon } from '../../foundations'
import { useAccordionContext } from './Accordion.context'
import { AccordionSummaryRoot } from './AccordionSummary.style'
import type { AccordionSummaryProps } from './AccordionSummary.types'

export const AccordionSummary = ({
  expandIcon = <ExpandMoreIcon />,
  children,
  ...rest
}: AccordionSummaryProps) => {
  const ctx = useAccordionContext()

  return (
    <AccordionSummaryRoot
      type="button"
      aria-expanded={ctx.expanded}
      $expanded={ctx.expanded}
      onClick={(event) => {
        event.preventDefault()
        ctx.toggle(event)
      }}
      {...rest}
    >
      <span>{children}</span>
      <span>{expandIcon}</span>
    </AccordionSummaryRoot>
  )
}

AccordionSummary.displayName = 'AccordionSummary'
