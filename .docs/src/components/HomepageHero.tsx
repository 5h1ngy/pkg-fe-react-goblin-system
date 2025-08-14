/* eslint-disable @typescript-eslint/no-require-imports */
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import type { JSX } from 'react'

import { Box, Button, Container, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { useHomepageHeroNavigation } from './HomepageHero.hooks'
import type { HomepageHeroProps } from './HomepageHero.types'
import {
  homepageHeroBodySx,
  homepageHeroLogoSx,
  homepageHeroSectionSx,
  homepageHeroStackSx,
} from './HomepageHero.style'

const logoSource = require('@site/static/img/logo.png').default

const HomepageHero = ({ onNavigate }: HomepageHeroProps): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const navigateToDocs = useHomepageHeroNavigation()

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate()
      return
    }
    navigateToDocs()
  }

  return (
    <Box component="section" sx={homepageHeroSectionSx}>
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center">
          <Box component="img" src={logoSource} alt="Goblin System logo" sx={homepageHeroLogoSx} />

          <Stack spacing={3} alignItems="center" sx={homepageHeroStackSx}>
            <Typography variant="overline" color="secondary">
              Dark-first design system
            </Typography>
            <Typography variant="h2" component="h1">
              {siteConfig.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Portfolio-grade React components and theme.
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={homepageHeroBodySx}>
              Goblin System pairs reusable tokens with cinematic surfaces, neon controls, and data
              scaffolding so you can ship immersive dark-mode experiences without reinventing the
              design language.
            </Typography>
          </Stack>

          <Button variant="outlined" size="large" color="secondary" onClick={handleNavigate}>
            Start building
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomepageHero
