import { useMemo } from 'react'

import type { HomepageFeature } from './HomepageFeatures.types'

const HOMEPAGE_FEATURES: HomepageFeature[] = [
  {
    kicker: 'Theme primitives',
    title: 'Dark-first foundations',
    description:
      'Gradients, palette tokens, typography, and spacing flow from a single theme so every surface feels cinematic out of the box.',
  },
  {
    kicker: 'Component workflows',
    title: 'Composable components',
    description:
      'Layout, data display, inputs, navigation, surfaces, and utilities share the same API conventions and `sx` entry point.',
  },
  {
    kicker: 'Docs orchestration',
    title: 'Docs + Storybook synergy',
    description:
      'Storybook exposes real props and theme controls, while the docs drill into architecture, localization, and design guidance.',
  },
]

export const useHomepageFeatures = (): HomepageFeature[] =>
  useMemo(() => HOMEPAGE_FEATURES, [])
