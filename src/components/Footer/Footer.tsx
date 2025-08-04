import { isExternal } from './Footer.helpers'
import { defaultFooterLabels, type FooterProps } from './Footer.types'
import {
  FooterBrand,
  FooterCopy,
  FooterInner,
  FooterLink,
  FooterLinks,
  FooterName,
  FooterRoot,
} from './Footer.style'

export const Footer = ({ profile, meta, labels }: FooterProps) => {
  const resolvedLabels = { ...defaultFooterLabels, ...labels }
  const links = profile.links ?? []
  const metaTitle = meta?.title ?? profile.name
  return (
    <FooterRoot>
      <FooterInner>
        <FooterBrand>
          <FooterName>{profile.name}</FooterName>
          {metaTitle && (
            <FooterCopy>
              {'\u00A9'} {new Date().getFullYear()} {metaTitle}
            </FooterCopy>
          )}
        </FooterBrand>
        {links.length > 0 && (
          <FooterLinks aria-label={resolvedLabels.profileLinks}>
            {links.map((link) => (
              <FooterLink
                key={`${link.type}-${link.label}`}
                href={link.url}
                target={isExternal(link.url) ? '_blank' : undefined}
                rel={isExternal(link.url) ? 'noreferrer' : undefined}
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterLinks>
        )}
      </FooterInner>
    </FooterRoot>
  )
}
