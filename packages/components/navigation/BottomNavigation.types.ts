import { HTMLAttributes } from "react"

import { SxProps } from '../../system'

export interface BottomNavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  value?: string | number
  defaultValue?: string | number
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | number) => void
  showLabels?: boolean
  sx?: SxProps
}
