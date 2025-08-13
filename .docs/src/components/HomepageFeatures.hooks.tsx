import { useMemo } from 'react'

import type { HomepageFeature } from './HomepageFeatures.types'

const HOMEPAGE_FEATURES: HomepageFeature[] = [
  {
    kicker: {
      id: 'homepage.features.foundations.kicker',
      message: 'Theme primitives',
      description: 'Feature kicker highlighting the theme primitives storyline',
    },
    title: {
      id: 'homepage.features.foundations.title',
      message: 'Dark-first foundations',
      description: 'Feature title highlighting theme foundations',
    },
    description: {
      id: 'homepage.features.foundations.description',
      message:
        'Gradients, palette tokens, typography and spacing come from a single theme so every surface feels cinematic out of the box.',
      description: 'Feature description about design tokens',
    },
  },
  {
    kicker: {
      id: 'homepage.features.components.kicker',
      message: 'Component workflows',
      description: 'Feature kicker emphasising component composition workflows',
    },
    title: {
      id: 'homepage.features.components.title',
      message: 'Composable components',
      description: 'Feature title highlighting component families',
    },
    description: {
      id: 'homepage.features.components.description',
      message:
        'Layout, data display, inputs, navigation, surfaces and utilities share the same API conventions and `sx` entry point.',
      description: 'Feature description about component families',
    },
  },
  {
    kicker: {
      id: 'homepage.features.docs.kicker',
      message: 'Docs orchestration',
      description: 'Feature kicker focusing on docs and Storybook orchestration',
    },
    title: {
      id: 'homepage.features.docs.title',
      message: 'Docs + Storybook synergy',
      description: 'Feature title about documentation & Storybook',
    },
    description: {
      id: 'homepage.features.docs.description',
      message:
        'Storybook stories expose real props and theme controls, while the docs focus on architecture, localisation and design guidance.',
      description: 'Feature description about docs & Storybook relationship',
    },
  },
]

export const useHomepageFeatures = (): HomepageFeature[] =>
  useMemo(() => HOMEPAGE_FEATURES, [])
