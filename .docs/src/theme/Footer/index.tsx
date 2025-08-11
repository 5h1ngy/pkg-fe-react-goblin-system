import type { HTMLAttributeAnchorTarget, ReactNode } from 'react'

import {
  isMultiColumnFooterLinks,
  useThemeConfig,
  type Footer,
  type FooterColumnItem,
  type FooterLinkItem,
  type FooterLogo,
} from '@docusaurus/theme-common'
import Link from '@docusaurus/Link'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import ThemedImage from '@theme/ThemedImage'

import { Box, Container, Grid, Stack, Typography } from 'pkg-fe-react-goblin-system/components'
import type { GoblinTheme } from 'pkg-fe-react-goblin-system'

const footerSurface = (mode: 'light' | 'dark') =>
  mode === 'dark'
    ? 'radial-gradient(140% 140% at 50% 0%, rgba(86, 78, 206, 0.18) 0%, rgba(6, 8, 14, 0.92) 48%, rgba(4, 6, 12, 0.96) 100%)'
    : 'radial-gradient(140% 140% at 50% 0%, rgba(114, 46, 209, 0.18) 0%, rgba(248, 250, 255, 0.92) 52%, rgba(255, 255, 255, 0.96) 100%)'

const groupTitleSx = () => (theme: GoblinTheme) => ({
  fontSize: theme.typography.pxToRem?.(13) ?? '0.8125rem',
  fontWeight: theme.typography.fontWeightMedium,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: theme.palette.text.secondary,
})

function FooterLink({ item }: { item: FooterLinkItem }): ReactNode {
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

  if (!hrefUrl && !toUrl) {
    return (
      <Typography component="span" variant="body2" color="textSecondary">
        {item.label}
      </Typography>
    )
  }

  const linkContent = (
    <Stack
      component="span"
      direction="row"
      spacing={1}
      alignItems="center"
      sx={(theme: GoblinTheme) => ({
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create('color'),
        '&:hover': {
          color: theme.palette.text.primary,
        },
      })}
    >
      <Typography component="span" variant="body2" color="inherit">
        {item.label}
      </Typography>
      {isExternal && <IconExternalLink width={14} height={14} />}
    </Stack>
  )

  if (hrefUrl) {
    const targetAttr: HTMLAttributeAnchorTarget | undefined =
      (typeof item.target === 'string' ? item.target : undefined) ??
      (isExternal ? '_blank' : undefined)
    const relAttr =
      (typeof item.rel === 'string' ? item.rel : undefined) ??
      (isExternal ? 'noopener noreferrer' : undefined)

    return (
      <Link
        href={hrefUrl}
        target={targetAttr}
        rel={relAttr}
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {linkContent}
      </Link>
    )
  }

  return (
    <Link
      to={toUrl!}
      style={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {linkContent}
    </Link>
  )
}

function FooterLinkGroup({
  title,
  items,
}: {
  title?: string | null
  items: FooterLinkItem[]
}): JSX.Element {
  return (
    <Stack spacing={2.5}>
      {title && (
        <Typography variant="overline" component="span" sx={groupTitleSx()}>
          {title}
        </Typography>
      )}
      <Stack spacing={1.5}>
        {items.map((link, index) => (
          <FooterLink key={index} item={link} />
        ))}
      </Stack>
    </Stack>
  )
}

function buildLinkColumns(links: Footer['links']): FooterColumnItem[] {
  if (!links || (Array.isArray(links) && links.length === 0)) {
    return []
  }

  if (isMultiColumnFooterLinks(links)) {
    return links
  }

  return [
    {
      title: null,
      items: links,
    },
  ]
}

function FooterLogoBlock({ logo }: { logo: FooterLogo }): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils()
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  }

  const image = (
    <ThemedImage
      alt={logo.alt}
      sources={sources}
      width={logo.width}
      height={logo.height}
      style={{
        display: 'block',
        maxHeight: logo.height ?? 48,
      }}
    />
  )

  if (logo.href) {
    return (
      <Link href={logo.href} target={logo.target} style={{ display: 'inline-flex' }}>
        {image}
      </Link>
    )
  }

  return image
}

export default function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig()
  if (!footer) {
    return null
  }

  const columns = buildLinkColumns(footer.links)

  return (
    <Box
      component="footer"
      sx={(theme: GoblinTheme) => ({
        marginTop: theme.spacing(12),
        background: footerSurface(theme.palette.mode),
        paddingBlock: theme.spacing(10),
        borderTop:
          theme.palette.mode === 'dark'
            ? '1px solid rgba(148, 163, 184, 0.12)'
            : '1px solid rgba(80, 104, 154, 0.12)',
      })}
    >
      <Container maxWidth="lg">
        {columns.length > 0 && (
          <Grid container spacing={6} sx={{ marginBottom: 6 }}>
            {columns.map((column, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={Math.min(12, Math.max(4, Math.floor(12 / columns.length)))}
                key={index}
              >
                <FooterLinkGroup title={column.title} items={column.items} />
              </Grid>
            ))}
          </Grid>
        )}

        <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
          {footer.logo && <FooterLogoBlock logo={footer.logo} />}
          {footer.copyright && (
            <Typography variant="caption" color="textSecondary" sx={{ maxWidth: '72ch' }}>
              {footer.copyright}
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
