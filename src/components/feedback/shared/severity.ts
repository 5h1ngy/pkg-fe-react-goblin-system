import type { MaterialTheme } from '../../../foundations'

export type Severity = 'success' | 'info' | 'warning' | 'error'

export const getSeverityColor = (theme: MaterialTheme, severity: Severity) => theme.palette[severity]
