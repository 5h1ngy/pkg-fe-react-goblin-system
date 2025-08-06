import type { CSSProperties } from 'react'

import type { MaterialTheme } from '../foundations'

export type SxInput =
  | CSSProperties
  | ((theme: MaterialTheme) => CSSProperties)
  | false
  | null
  | undefined

export type SxProps = SxInput | SxInput[]
