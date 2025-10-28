import type { GoblinTheme } from '../../../foundations'

export type Severity = 'success' | 'info' | 'warning' | 'error'

export const getSeverityColor = (theme: GoblinTheme, severity: Severity) => theme.palette[severity]
