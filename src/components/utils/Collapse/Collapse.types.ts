import { HTMLAttributes } from 'react'

import { SxProps } from '../../../system'

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  in?: boolean
  timeout?: number
  sx?: SxProps
}
