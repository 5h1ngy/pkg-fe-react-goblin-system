import 'styled-components'

import type { GoblinTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends GoblinTheme {}
}
