import type { ReactNode } from 'react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import HomepageHero from '@site/src/components/HomepageHero'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

const HomePage = (): ReactNode => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description="Goblin System documentation"
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default HomePage
