import 'styled-components'

import type { MaterialTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends MaterialTheme {}
}
