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
    title: 'Rapid Development',
    image: require('@site/static/img/home-rapid.png').default,
    description: (
      <>
        Accelerate your projects with a set of ready-to-use, customizable components that help you build macrosections quickly and efficiently.
      </>
    ),
  },
  {
    title: 'Modular Architecture',
    image: require('@site/static/img/home-modular.png').default,
    description: (
      <>
        Benefit from a modular design that enables seamless integration and clean code, making your applications scalable and maintainable.
      </>
    ),
  },
  {
    title: 'Modern Technologies',
    image: require('@site/static/img/home-modern.png').default,
    description: (
      <>
        Leverage the power of React, Chakra UI, and TypeScript to build robust, dynamic interfaces that stand up to modern web challenges.
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
