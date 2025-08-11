import Translate, { translate } from '@docusaurus/Translate'
import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Box, Container, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const StorybookPage = (): JSX.Element => {
  const storybookStaticUrl = useBaseUrl('/storybook/index.html')
  const storybookUrl =
    process.env.NODE_ENV === 'production' ? storybookStaticUrl : 'http://localhost:6006'

  return (
    <Layout
      title={translate({
        id: 'storybook.page.title',
        message: 'Storybook',
        description: 'Title for the embedded Storybook page',
      })}
      description={translate({
        id: 'storybook.page.description',
        message: 'Interactive component explorer',
        description: 'Meta description for the embedded Storybook page',
      })}
    >
      <main>
        <Container
          maxWidth="lg"
          sx={(theme) => ({
            paddingBlock: theme.spacing(6),
            minHeight: `calc(100vh - ${theme.spacing(12)})`,
          })}
        >
          <Stack spacing={3}>
            <Typography variant="h2">
              <Translate id="storybook.page.heading">Storybook</Translate>
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <Translate id="storybook.page.intro">
                Explore live component stories that share the exact theme configuration used across
                the documentation site.
              </Translate>
            </Typography>
            <Box
              component="iframe"
              src={storybookUrl}
              title={translate({
                id: 'storybook.page.iframeTitle',
                message: 'Goblin System Storybook',
                description: 'Title attribute for the embedded Storybook iframe',
              })}
              sx={(theme) => ({
                width: '100%',
                minHeight: `calc(100vh - ${theme.spacing(24)})`,
                border: '1px solid rgba(148, 163, 184, 0.18)',
                borderRadius: theme.shape.borderRadius,
                background: theme.palette.background.paper,
              })}
              allowFullScreen
            />
          </Stack>
        </Container>
      </main>
    </Layout>
  )
}

export default StorybookPage
