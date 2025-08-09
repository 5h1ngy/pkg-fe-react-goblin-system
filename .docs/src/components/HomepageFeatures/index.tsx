/* eslint-disable @typescript-eslint/no-require-imports */
import type { JSX } from 'react'

import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from 'pkg-fe-react-goblin-system/components'

type FeatureItem = {
  title: string
  image: string
  description: string
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
    title: 'Portfolio Fidelity',
    image: require('@site/static/img/home-rapid.png').default,
    description:
      'Gradients, fog layers and ambient shadows come from the same theme powering the original portfolio, so every screen feels bespoke.',
  },
  {
    title: 'Shared Primitives',
    image: require('@site/static/img/home-modular.png').default,
    description:
      'Cards, sections, overlays and tags live in a single toolkit - compose them to build narrative case studies in minutes.',
  },
  {
    title: 'Docs + Storybook',
    image: require('@site/static/img/home-modern.png').default,
    description:
      'Storybook controls fine-tune the theme accents while Docusaurus explains the building blocks, keeping design and implementation aligned.',
  },
]

const FeatureCard = ({ title, image, description }: FeatureItem): JSX.Element => (
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
        alt={title}
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
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  </Card>
)

const SectionHeader = (): JSX.Element => (
  <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
    <Typography variant="overline" color="secondary">
      Build expressive case studies
    </Typography>
    <Typography variant="h3">Everything wired for thematic storytelling</Typography>
    <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '60ch' }}>
      Use the same primitives that shipped the original portfolio. Layouts, surfaces and feedback
      elements are coordinated so every project inherits the same cinematic tone.
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
            <Grid item xs={12} md={4} key={feature.title}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
)

export default HomepageFeatures
