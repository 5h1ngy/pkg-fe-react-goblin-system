import { HTMLAttributes } from 'react'

import { SxProps } from '../../system'

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  expanded?: boolean
  defaultExpanded?: boolean
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void
  disabled?: boolean
  sx?: SxProps
}
