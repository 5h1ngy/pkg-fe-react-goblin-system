import { isMultiColumnFooterLinks } from '@docusaurus/theme-common'

import type { FooterColumn, FooterConfig } from './Footer.types'

export const useFooterColumns = (links: FooterConfig['links']): FooterColumn[] => {
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
