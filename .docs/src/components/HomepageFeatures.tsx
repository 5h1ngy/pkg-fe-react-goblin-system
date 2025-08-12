import Translate, { translate } from '@docusaurus/Translate'
import type { JSX } from 'react'

import { Box, Card, Container, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { useHomepageFeatures } from './HomepageFeatures.hooks'
import {
  homepageFeatureCardContentSx,
  homepageFeatureCardSx,
  homepageFeatureImageSx,
  homepageFeaturesSectionSx,
  homepageSectionHeaderSx,
  homepageSectionIntroSx,
} from './HomepageFeatures.style'
import type { HomepageFeature } from './HomepageFeatures.types'

const HomepageFeatureCard = ({ feature }: { feature: HomepageFeature }): JSX.Element => (
  <Card component="article" variant="outlined" sx={homepageFeatureCardSx}>
    <Stack spacing={3} alignItems="center" sx={homepageFeatureCardContentSx}>
      <Box
        component="img"
        src={feature.image}
        alt={translate({
          id: `${feature.title.id}.alt`,
          message: feature.title.message,
          description: `${feature.title.description} (alt text)`,
        })}
        sx={homepageFeatureImageSx}
      />
      <Stack spacing={2}>
        <Typography variant="h4">
          <Translate id={feature.title.id} description={feature.title.description}>
            {feature.title.message}
          </Translate>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Translate id={feature.description.id} description={feature.description.description}>
            {feature.description.message}
          </Translate>
        </Typography>
      </Stack>
    </Stack>
  </Card>
)

const HomepageFeaturesHeader = (): JSX.Element => (
  <Stack spacing={2} alignItems="center" sx={homepageSectionHeaderSx}>
    <Typography variant="overline" color="secondary">
      <Translate id="homepage.features.overline">Build expressive case studies</Translate>
    </Typography>
    <Typography variant="h3">
      <Translate id="homepage.features.heading">
        Everything wired for thematic storytelling
      </Translate>
    </Typography>
    <Typography variant="body1" color="textSecondary" sx={homepageSectionIntroSx}>
      <Translate id="homepage.features.intro">
        Use the same primitives that shipped the original portfolio. Layouts, surfaces, navigation,
        inputs and feedback elements are coordinated so every project inherits the same cinematic
        tone.
      </Translate>
    </Typography>
  </Stack>
)

const HomepageFeatures = (): JSX.Element => {
  const features = useHomepageFeatures()

  return (
    <Box component="section" sx={homepageFeaturesSectionSx}>
      <Container maxWidth="lg">
        <Stack spacing={8}>
          <HomepageFeaturesHeader />
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title.id}>
                <HomepageFeatureCard feature={feature} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomepageFeatures
