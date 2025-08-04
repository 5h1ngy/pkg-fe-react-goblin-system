import type { ReactNode } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import SystemStack from '@site/src/components/SystemStack'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  OpenSourceSection,
  OpenSourceProductsSection,
  ExperienceSection,
} from 'pkg-fe-react-goblin-system/components/sections'
import { PageFrame } from 'pkg-fe-react-goblin-system/components/shared/PageFrame'
import { getPortfolioData } from 'pkg-fe-react-goblin-system/data/portfolio'
import type { PortfolioHero, PortfolioOrbitIcon, PortfolioOrbitRing } from 'pkg-fe-react-goblin-system/data/portfolio.types'

const portfolio = getPortfolioData('it')

const withBasePath = (baseUrl: string, assetPath: string) => {
  if (/^https?:/i.test(assetPath)) {
    return assetPath
  }
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return `${normalizedBase}${normalizedPath}`
}

const resolveOrbit = (hero: PortfolioHero, baseUrl: string): PortfolioHero => {
  const mapIcons = (icons: PortfolioOrbitIcon[]) =>
    icons.map((icon) => ({
      ...icon,
      icon: withBasePath(baseUrl, icon.icon),
    }))

  return {
    ...hero,
    orbit: {
      ...hero.orbit,
      center: withBasePath(baseUrl, hero.orbit.center),
      rings: hero.orbit.rings.map<PortfolioOrbitRing>((ring) => ({
        ...ring,
        icons: mapIcons(ring.icons),
      })),
    },
  }
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  const hero = resolveOrbit(portfolio.hero, siteConfig.baseUrl ?? '/')

  return (
    <Layout title={siteConfig.title} description="Goblin System documentation">
      <PageFrame>
        <HeroSection hero={hero} socialLinks={portfolio.profile.links} />
        <AboutSection about={portfolio.about} />
        <SkillsSection skills={portfolio.skills} />
        <OpenSourceProductsSection products={portfolio.openSourceProducts} />
        <OpenSourceSection openSource={portfolio.openSource} />
        <HomepageFeatures />
        <SystemStack />
        <ExperienceSection experience={portfolio.experience} />
      </PageFrame>
    </Layout>
  )
}
