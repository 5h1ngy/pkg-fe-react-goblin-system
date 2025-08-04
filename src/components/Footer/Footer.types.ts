export interface FooterLinkItem {
  label: string
  url: string
  type?: string
}

export interface FooterProfile {
  name: string
  links?: FooterLinkItem[]
}

export interface FooterMeta {
  title?: string
}

export interface FooterLabels {
  profileLinks: string
}

export interface FooterProps {
  profile: FooterProfile
  meta?: FooterMeta
  labels?: Partial<FooterLabels>
}

export const defaultFooterLabels: FooterLabels = {
  profileLinks: 'Profile links',
}
