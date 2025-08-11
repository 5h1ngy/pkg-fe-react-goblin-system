/* eslint-disable @typescript-eslint/no-require-imports */
import Translate, { translate } from '@docusaurus/Translate'
import type { JSX } from 'react'

import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from 'pkg-fe-react-goblin-system/components'
import React from 'react'

type FeatureItem = {
  image: string
  titleId: string
  titleDefault: string
  titleDescription: string
  descriptionId: string
  descriptionDefault: string
  descriptionDescription: string
}

const featureSectionBackground = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? 'linear-gradient(180deg, rgba(11, 13, 19, 0.9) 0%, rgba(9, 12, 18, 0.94) 100%)'
    : 'linear-gradient(180deg, rgba(237, 242, 252, 0.65) 0%, rgba(255, 255, 255, 0.92) 100%)'

const featureCardSurface = (mode: 'light' | 'dark'): { background: string; border: string } =>
  mode === 'dark'
    ? {
        background: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid rgba(148, 163, 184, 0.14)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.75)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
      }

const features: FeatureItem[] = [
  {
    image: require('@site/static/img/home-rapid.png').default,
    titleId: 'homepage.features.foundations.title',
    titleDefault: 'Dark-first foundations',
    titleDescription: 'Feature title highlighting theme foundations',
    descriptionId: 'homepage.features.foundations.description',
    descriptionDefault:
      'Gradients, palette tokens, typography and spacing come from a single theme so every surface feels cinematic out of the box.',
    descriptionDescription: 'Feature description about design tokens',
  },
  {
    image: require('@site/static/img/home-modular.png').default,
    titleId: 'homepage.features.components.title',
    titleDefault: 'Composable components',
    titleDescription: 'Feature title highlighting component families',
    descriptionId: 'homepage.features.components.description',
    descriptionDefault:
      'Layout, data display, inputs, navigation, surfaces and utilities share the same API conventions and `sx` entry point.',
    descriptionDescription: 'Feature description about component families',
  },
  {
    image: require('@site/static/img/home-modern.png').default,
    titleId: 'homepage.features.docs.title',
    titleDefault: 'Docs + Storybook synergy',
    titleDescription: 'Feature title about documentation & Storybook',
    descriptionId: 'homepage.features.docs.description',
    descriptionDefault:
      'Storybook stories expose real props and theme controls, while the docs focus on architecture, localisation and design guidance.',
    descriptionDescription: 'Feature description about docs & Storybook relationship',
  },
]

const FeatureCard = ({
  image,
  titleId,
  titleDefault,
  titleDescription,
  descriptionId,
  descriptionDefault,
  descriptionDescription,
}: FeatureItem): JSX.Element => (
  <Card
    variant="outlined"
    sx={(theme) => ({
      height: '100%',
      ...featureCardSurface(theme.palette.mode),
      boxShadow: 'none',
      backdropFilter: 'blur(22px)',
      padding: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })}
  >
    <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', width: '100%' }}>
      <Box
        component="img"
        src={image}
        alt={translate({
          id: `${titleId}.alt`,
          message: titleDefault,
          description: `${titleDescription} (alt text)`,
        })}
        sx={(theme) => ({
          width: theme.spacing(18),
          height: theme.spacing(18),
          objectFit: 'contain',
          filter:
            theme.palette.mode === 'dark'
              ? 'drop-shadow(0 14px 28px rgba(8, 12, 24, 0.5))'
              : 'drop-shadow(0 12px 24px rgba(47, 63, 102, 0.18))',
        })}
      />
      <Stack spacing={2}>
        <Typography variant="h4">
          {translate({
            id: titleId,
            message: titleDefault,
            description: titleDescription,
          })}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {translate({
            id: descriptionId,
            message: descriptionDefault,
            description: descriptionDescription,
          })}
        </Typography>
      </Stack>
    </Stack>
  </Card>
)

const SectionHeader = (): JSX.Element => (
  <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
    <Typography variant="overline" color="secondary">
      <Translate id="homepage.features.overline">Build expressive case studies</Translate>
    </Typography>
    <Typography variant="h3">
      <Translate id="homepage.features.heading">
        Everything wired for thematic storytelling
      </Translate>
    </Typography>
    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '60ch' }}>
      <Translate id="homepage.features.intro">
        Use the same primitives that shipped the original portfolio. Layouts, surfaces, navigation,
        inputs and feedback elements are coordinated so every project inherits the same cinematic
        tone.
      </Translate>
    </Typography>
  </Stack>
)

const HomepageFeatures = (): JSX.Element => (
  <Box
    component="section"
    sx={(theme) => ({
      paddingBlock: theme.spacing(12),
      background: featureSectionBackground(theme.palette.mode),
    })}
  >
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <SectionHeader />
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.titleId}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)

export default HomepageFeatures
