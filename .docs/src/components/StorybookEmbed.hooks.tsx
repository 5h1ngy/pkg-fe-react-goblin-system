import { useMemo } from 'react'

import useBaseUrl from '@docusaurus/useBaseUrl'

export const useStorybookEmbedUrl = (): string => {
  const baseUrl = useBaseUrl('/storybook/index.html')

  return useMemo(() => {
    if (process.env.NODE_ENV === 'production') {
      return baseUrl
    }
    return 'http://localhost:6006'
  }, [baseUrl])
}
