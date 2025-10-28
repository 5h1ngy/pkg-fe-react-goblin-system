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
            {feature.kicker}
          </Typography>
        </Box>
        <Typography variant="caption" component="span" sx={homepageFeatureIndexSx}>
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Typography variant="h4">{feature.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {feature.description}
        </Typography>
      </Stack>
    </Stack>
  </Card>
)

const HomepageFeaturesHeader = (): JSX.Element => (
  <Stack spacing={2} alignItems="center" sx={homepageSectionHeaderSx}>
    <Typography variant="overline" color="secondary">
      Build expressive case studies
    </Typography>
    <Typography variant="h3">
      Everything wired for thematic storytelling
    </Typography>
    <Typography variant="body1" color="textSecondary" sx={homepageSectionIntroSx}>
      Use the same primitives that shipped the original portfolio. Layouts, surfaces, navigation,
      inputs, and feedback elements are coordinated so every project inherits the same cinematic
      tone.
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
              <Grid item xs={12} md={4} key={`${feature.title}-${index}`}>
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
