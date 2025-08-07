import type { CSSProperties } from 'react'

import type { GoblinTheme } from '../foundations'

export type SxInput =
  | CSSProperties
  | ((theme: GoblinTheme) => CSSProperties)
  | false
  | null
  | undefined

export type SxProps = SxInput | SxInput[]
