/* eslint-disable @typescript-eslint/no-require-imports */
import type { ReactNode } from 'react'
import { useCallback } from 'react'

import Translate, { translate } from '@docusaurus/Translate'
import { useHistory } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import { Box, Button, Container, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const heroBackground = (mode: 'light' | 'dark'): string =>
  mode === 'dark'
    ? 'radial-gradient(120% 120% at 50% 0%, rgba(114, 46, 209, 0.28) 0%, rgba(15, 23, 42, 0.12) 42%, rgba(10, 12, 17, 0.92) 100%), linear-gradient(180deg, rgba(8, 10, 14, 0.92) 0%, rgba(8, 10, 14, 0.96) 100%)'
    : 'radial-gradient(120% 120% at 50% 0%, rgba(114, 46, 209, 0.2) 0%, rgba(231, 242, 255, 0.35) 46%, rgba(255, 255, 255, 0.92) 100%)'

const HeroSection = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  const history = useHistory()
  const docsEntryUrl = useBaseUrl('/docs/getting-started')

  const handleNavigate = useCallback(() => {
    history.push(docsEntryUrl)
  }, [history, docsEntryUrl])

  return (
    <Box
      component="section"
      sx={(theme) => ({
        paddingBlock: theme.spacing(12),
        background: heroBackground(theme.palette.mode),
      })}
    >
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center">
          <Box
            component="img"
            src={require('@site/static/img/logo.png').default}
            alt={translate({
              id: 'homepage.hero.logoAlt',
              message: 'Goblin System logo',
              description: 'Alt text for the Goblin System logo in the hero',
            })}
            sx={(theme) => ({
              width: theme.spacing(16),
              height: theme.spacing(16),
              objectFit: 'contain',
              filter:
                theme.palette.mode === 'dark'
                  ? 'drop-shadow(0 18px 28px rgba(0, 0, 0, 0.55))'
                  : 'drop-shadow(0 16px 24px rgba(45, 64, 109, 0.22))',
            })}
          />

          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
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
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '38ch' }}>
              <Translate id="homepage.hero.body">
                Goblin System mette in scena componenti React e token condivisi per costruire
                interfacce narrative: superfici ambient, controlli neon e librerie di dati pensati
                per ambienti dark.
              </Translate>
            </Typography>
          </Stack>

          <Button variant="contained" size="large" color="primary" onClick={handleNavigate}>
            <Translate id="homepage.hero.cta">Start building</Translate>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Goblin System documentation',
        description: 'Meta description for the homepage',
      })}
    >
      <HeroSection />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
