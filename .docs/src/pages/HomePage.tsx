import type { ReactNode } from 'react'

import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import HomepageHero from '@site/src/components/HomepageHero'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

const HomePage = (): ReactNode => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Goblin System documentation',
        description: 'Meta description for the homepage',
      })}
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default HomePage
