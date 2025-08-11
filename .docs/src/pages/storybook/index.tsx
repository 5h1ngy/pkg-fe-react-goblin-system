import Layout from '@theme/Layout'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Box, Container, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

const StorybookPage = (): JSX.Element => {
  const storybookStaticUrl = useBaseUrl('/storybook/index.html')
  const storybookUrl =
    process.env.NODE_ENV === 'production' ? storybookStaticUrl : 'http://localhost:6006'

  return (
    <Layout title="Storybook" description="Interactive component explorer">
      <main>
        <Container
          maxWidth="lg"
          sx={(theme) => ({
            paddingBlock: theme.spacing(6),
            minHeight: `calc(100vh - ${theme.spacing(12)})`,
          })}
        >
          <Stack spacing={3}>
            <Typography variant="h2">Storybook</Typography>
            <Typography variant="body1" color="textSecondary">
              Explore live component stories with the same Goblin theme applied to the documentation
              site.
            </Typography>
            <Box
              component="iframe"
              src={storybookUrl}
              title="Goblin System Storybook"
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
