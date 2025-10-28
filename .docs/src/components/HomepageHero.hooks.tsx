import { useCallback } from 'react'

import { useHistory } from '@docusaurus/router'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const useHomepageHeroNavigation = (): (() => void) => {
  const history = useHistory()
  const docsEntryUrl = useBaseUrl('/docs/getting-started')

  return useCallback(() => {
    history.push(docsEntryUrl)
  }, [history, docsEntryUrl])
}
