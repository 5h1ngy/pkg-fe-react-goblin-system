/* eslint-disable @typescript-eslint/no-require-imports */
import Translate, { translate } from '@docusaurus/Translate'
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
          <Box
            component="img"
            src={logoSource}
            alt={translate({
              id: 'homepage.hero.logoAlt',
              message: 'Goblin System logo',
              description: 'Alt text for the Goblin System logo in the hero',
            })}
            sx={homepageHeroLogoSx}
          />

          <Stack spacing={3} alignItems="center" sx={homepageHeroStackSx}>
            <Typography variant="overline" color="secondary">
              <Translate id="homepage.hero.overline">Dark-first design system</Translate>
            </Typography>
            <Typography variant="h2" component="h1">
              {siteConfig.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <Translate id="homepage.hero.tagline">
                Portfolio-grade React components and theme.
              </Translate>
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={homepageHeroBodySx}>
              <Translate id="homepage.hero.body">
                Goblin System mette in scena componenti React e token condivisi per costruire
                interfacce narrative: superfici ambient, controlli neon e librerie di dati pensati
                per ambienti dark.
              </Translate>
            </Typography>
          </Stack>

          <Button variant="contained" size="large" color="secondary" onClick={handleNavigate}>
            <Translate id="homepage.hero.cta">Start building</Translate>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomepageHero
