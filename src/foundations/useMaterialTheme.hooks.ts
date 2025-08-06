import { useTheme } from 'styled-components'

import type { MaterialTheme } from './theme'

export const useMaterialTheme = () => useTheme() as MaterialTheme
