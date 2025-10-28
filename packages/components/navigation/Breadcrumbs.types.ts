import { HTMLAttributes, ReactNode } from 'react'

import { SxProps } from '../../system'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  separator?: ReactNode
  sx?: SxProps
}
