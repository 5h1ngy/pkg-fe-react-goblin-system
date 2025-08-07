import { useTheme } from 'styled-components'

import type { GoblinTheme } from './theme'

export const useGoblinTheme = () => useTheme() as GoblinTheme
