import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Transformer from './Transformer';
import { withContext } from './index';

// Wrapping del componente con il Provider
const TransformerWithContext = withContext(Transformer);

const meta: Meta<typeof Transformer> = {
  title: 'Pages/Transformer',
  component: TransformerWithContext,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Transformer>;

export const Default: Story = {
  args: {
    children: <div id="content" style={{ padding: '2rem', textAlign: 'center' }}>Content goes here</div>,
    navigationScroll: true,
    navbarItems: [
      { label: 'Home', value: '/', group: 'main' },
      { label: 'About', value: '/about', group: 'main' },
      { label: 'Services', value: '/services', group: 'services' },
      { label: 'Contact', value: '/contact', group: 'main' },
    ],
    navbarSubItems: [
      { label: 'Service 1', value: '/services/1', group: ['services'] },
      { label: 'Service 2', value: '/services/2', group: ['services'] },
      { label: 'Service 3', value: '/services/3', group: ['services'] },
    ],
    logo: 'https://via.placeholder.com/100',
    background: {
      opacity: 5,
      image: 'https://source.unsplash.com/random/1920x1080/?nature',
      imageDark: 'https://source.unsplash.com/random/1920x1080/?night',
    },
  },
};

export const WithoutBackground: Story = {
  args: {
    children: <div id="content" style={{ padding: '2rem', textAlign: 'center' }}>Content goes here</div>,
    navigationScroll: true,
    navbarItems: [
      { label: 'Home', value: '/', group: 'main' },
      { label: 'About', value: '/about', group: 'main' },
      { label: 'Contact', value: '/contact', group: 'main' },
    ],
    logo: 'https://via.placeholder.com/100',
  },
};
