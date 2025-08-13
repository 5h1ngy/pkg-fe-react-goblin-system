import Translate from '@docusaurus/Translate'
import type { JSX } from 'react'

import { Box, Card, Container, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { useHomepageFeatures } from './HomepageFeatures.hooks'
import {
  homepageFeatureBadgeLabelSx,
  homepageFeatureBadgeSx,
  homepageFeatureCardContentSx,
  homepageFeatureCardHeaderSx,
  homepageFeatureCardSx,
  homepageFeatureIndexSx,
  homepageFeaturesSectionSx,
  homepageSectionHeaderSx,
  homepageSectionIntroSx,
} from './HomepageFeatures.style'
import type { HomepageFeature } from './HomepageFeatures.types'

const HomepageFeatureCard = ({
  feature,
  index,
}: {
  feature: HomepageFeature
  index: number
}): JSX.Element => (
    <Card as="article" variant="outlined" sx={homepageFeatureCardSx}>
      <Stack spacing={3} sx={homepageFeatureCardContentSx}>
        <Box sx={homepageFeatureCardHeaderSx}>
          <Box sx={homepageFeatureBadgeSx}>
            <Typography variant="overline" component="span" sx={homepageFeatureBadgeLabelSx}>
              <Translate id={feature.kicker.id} description={feature.kicker.description}>
                {feature.kicker.message}
              </Translate>
            </Typography>
          </Box>
          <Typography variant="caption" component="span" sx={homepageFeatureIndexSx}>
            {String(index + 1).padStart(2, '0')}
          </Typography>
        </Box>
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
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={feature.title.id}>
                <HomepageFeatureCard feature={feature} index={index} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomepageFeatures
