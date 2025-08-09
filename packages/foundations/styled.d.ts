/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components'

import type { GoblinTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends GoblinTheme {}
}
