import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Removed 'hero--primary' to allow custom background styling that matches the logo
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Logo inclusion */}
        <img
          src={require('@site/static/img/logo.png').default}
          alt="Logo"
          className={styles.logo}
        />

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        {/* Extended description for the open source library */}
        <div className={styles.description}>
          <p>
            Our open-source library-built on Chakra UI, React, and TypeScript-empowers you to rapidly create
            the macrosections of your applications. It offers a comprehensive suite of modules designed to streamline
            frontend management and accelerate development.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/overview">
            Explore Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
