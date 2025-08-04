/* eslint-disable @typescript-eslint/no-require-imports */
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Portfolio Fidelity',
    image: require('@site/static/img/home-rapid.png').default,
    description: (
      <>
        Gradients, fog layers and ambient shadows come from the same theme that powers the original portfolio, so every screen instantly feels bespoke.
      </>
    ),
  },
  {
    title: 'Shared Primitives',
    image: require('@site/static/img/home-modular.png').default,
    description: (
      <>
        Cards, sections, overlays and tags live in one shared folder—mix and match them to build narrative case studies in minutes.
      </>
    ),
  },
  {
    title: 'Docs + Storybook',
    image: require('@site/static/img/home-modern.png').default,
    description: (
      <>
        Storybook controls theme accents while Docusaurus explains the building blocks, keeping design and implementation perfectly aligned.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}



