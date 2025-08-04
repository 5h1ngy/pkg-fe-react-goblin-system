import { useTheme } from 'styled-components'

import {
  LoaderContent,
  LoaderCore,
  LoaderHalo,
  LoaderLabel,
  LoaderMeta,
  LoaderOrbit,
  LoaderOverlay,
  LoaderPercent,
  LoaderProgress,
  LoaderProgressFill,
  LoaderPulse,
  LoaderOrb,
} from './ScreenLoader.style'

export interface ScreenLoaderProps {
  progress?: number
  accentColor?: string
  isVisible?: boolean
  label?: string
  progressLabel?: string
  formatPercent?: (percent: number) => string
}

const clampProgress = (value?: number) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return 0
  }

  const normalized = Math.min(Math.max(value, 0), value > 1 ? 100 : 1)
  return normalized > 1 ? normalized / 100 : normalized
}

const defaultPercentFormatter = (percent: number) => `${percent}% ready`

export const ScreenLoader = ({
  progress = 0,
  accentColor,
  isVisible = false,
  label = 'Preparing the experience',
  progressLabel = 'Loading progress',
  formatPercent = defaultPercentFormatter,
}: ScreenLoaderProps) => {
  const theme = useTheme()
  const normalized = clampProgress(progress)
  const percent = Math.round(normalized * 100)
  const accent = accentColor ?? theme.colors.accent

  return (
    <LoaderOverlay $visible={isVisible} aria-hidden={!isVisible} role="status" aria-live="polite">
      <LoaderContent>
        <LoaderCore>
          <LoaderHalo $accent={accent} />
          <LoaderPulse $accent={accent} />
          <LoaderOrbit $accent={accent} />
          <LoaderOrb $accent={accent} />
        </LoaderCore>
        <LoaderMeta>
          <LoaderLabel>{label}</LoaderLabel>
          <LoaderProgress
            role="progressbar"
            aria-label={progressLabel}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
          >
            <LoaderProgressFill $accent={accent} style={{ width: `${percent}%` }} />
          </LoaderProgress>
          <LoaderPercent>{formatPercent(percent)}</LoaderPercent>
        </LoaderMeta>
      </LoaderContent>
    </LoaderOverlay>
  )
}
