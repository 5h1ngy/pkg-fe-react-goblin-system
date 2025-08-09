/* eslint-disable @typescript-eslint/no-require-imports */
import type { ReactNode } from 'react'
import { useCallback } from 'react'

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
            alt="Goblin System logo"
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
              Portfolio-grade theme
            </Typography>
            <Typography variant="h2" component="h1">
              {siteConfig.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {siteConfig.tagline}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '38ch' }}>
              Extracted from the original portfolio, Goblin System pairs React 18 and
              styled-components to deliver foggy gradients, ambient cards, tags and overlays for
              expressive case studies.
            </Typography>
          </Stack>

          <Button variant="contained" size="large" color="primary" onClick={handleNavigate}>
            Start building
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description="Goblin System documentation">
      <HeroSection />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
