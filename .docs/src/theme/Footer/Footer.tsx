import Link from '@docusaurus/Link'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import ThemedImage from '@theme/ThemedImage'
import { useThemeConfig } from '@docusaurus/theme-common'
import type { HTMLAttributeAnchorTarget, JSX } from 'react'

import { Box, Container, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'

import { useFooterColumns } from './Footer.hooks'
import {
  footerContainerSx,
  footerContentStackSx,
  footerGridSx,
  footerGroupTitleSx,
  footerLinkContentSx,
  footerLinkWrapperSx,
  footerLogoImageSx,
  footerLogoLinkSx,
} from './Footer.style'
import type { FooterColumn, FooterLinkConfig, FooterLogoConfig } from './Footer.types'

const FooterLink = ({ item }: { item: FooterLinkConfig }): JSX.Element | null => {
  const { withBaseUrl } = useBaseUrlUtils()

  const toUrl = item.to ? withBaseUrl(item.to) : undefined
  const hrefUrl = item.href
    ? item.prependBaseUrlToHref
      ? withBaseUrl(item.href)
      : item.href
    : undefined

  if (item.html) {
    return (
      <Typography
        component="span"
        variant="body2"
        color="textSecondary"
        dangerouslySetInnerHTML={{ __html: item.html }}
      />
    )
  }

  if (!item.label) {
    return null
  }

  const isExternal = hrefUrl ? !isInternalUrl(hrefUrl) : false
  const linkTarget = (item.target ?? (isExternal ? '_blank' : undefined)) as
    | HTMLAttributeAnchorTarget
    | undefined

  const linkContent = (
    <Stack component="span" direction="row" spacing={1} alignItems="center" sx={footerLinkContentSx}>
      <Typography component="span" variant="body2" color="inherit">
        {item.label}
      </Typography>
      {isExternal && <IconExternalLink width={14} height={14} />}
    </Stack>
  )

  if (hrefUrl) {
    return (
      <Box
        component={Link}
        href={hrefUrl}
        target={linkTarget}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
        sx={footerLinkWrapperSx}
      >
        {linkContent}
      </Box>
    )
  }

  if (toUrl) {
    return (
      <Box component={Link} to={toUrl} sx={footerLinkWrapperSx}>
        {linkContent}
      </Box>
    )
  }

  return (
    <Typography component="span" variant="body2" color="textSecondary">
      {item.label}
    </Typography>
  )
}

const FooterLinkGroup = ({ column }: { column: FooterColumn }): JSX.Element => (
  <Stack spacing={2.5}>
    {column.title && (
      <Typography variant="overline" component="span" sx={footerGroupTitleSx()}>
        {column.title}
      </Typography>
    )}
    <Stack spacing={1.5}>
      {column.items.map((item, index) => (
        <FooterLink key={index} item={item} />
      ))}
    </Stack>
  </Stack>
)

const FooterLogo = ({ logo }: { logo: FooterLogoConfig }): JSX.Element => {
  const { withBaseUrl } = useBaseUrlUtils()

  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  }
  const logoHeight = typeof logo.height === 'number' ? logo.height : undefined
  const logoTarget = logo.href
    ? (logo.target ?? (logo.href?.startsWith('http') ? '_blank' : undefined))
    : undefined

  const targetAttribute = logoTarget as HTMLAttributeAnchorTarget | undefined

  const image = (
    <Box
      component={ThemedImage}
      alt={logo.alt ?? 'Logo'}
      sources={sources}
      width={logo.width}
      height={logo.height}
      sx={footerLogoImageSx(logoHeight)}
    />
  )

  if (logo.href) {
    return (
      <Box
        component={Link}
        href={logo.href}
        target={targetAttribute}
        rel={targetAttribute === '_blank' ? 'noopener noreferrer' : undefined}
        sx={footerLogoLinkSx}
      >
        {image}
      </Box>
    )
  }

  return image
}

const getColumnMd = (columns: FooterColumn[]): number =>
  Math.min(12, Math.max(4, Math.floor(12 / columns.length)))

const FooterComponent = (): JSX.Element | null => {
  const { footer } = useThemeConfig()
  if (!footer) {
    return null
  }

  const columns = useFooterColumns(footer.links)

  return (
    <Box component="footer" sx={footerContainerSx}>
      <Container maxWidth="lg">
        {columns.length > 0 && (
          <Grid container spacing={6} sx={footerGridSx}>
            {columns.map((column, index) => (
              <Grid item xs={12} sm={6} md={getColumnMd(columns)} key={index}>
                <FooterLinkGroup column={column} />
              </Grid>
            ))}
          </Grid>
        )}

        <Stack spacing={3} alignItems="center" sx={footerContentStackSx}>
          {footer.logo && <FooterLogo logo={footer.logo} />}
          {footer.copyright && (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ maxWidth: '72ch' }}
              dangerouslySetInnerHTML={{ __html: footer.copyright }}
            />
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export default FooterComponent
