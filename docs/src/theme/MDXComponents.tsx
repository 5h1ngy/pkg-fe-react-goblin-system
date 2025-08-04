import type { MDXComponents as MDXComponentsType } from '@mdx-js/react';
import MDXComponents from '@theme-original/MDXComponents';
import {
  ActionLink,
  Card,
  MetaLabel,
  Section,
  SurfaceButton,
  TagList,
  TagPill,
} from 'pkg-fe-react-goblin-system';

const components: MDXComponentsType = {
  ...MDXComponents,
  ActionLink,
  Card,
  MetaLabel,
  Section,
  SurfaceButton,
  TagList,
  TagPill,
};

export default components;
