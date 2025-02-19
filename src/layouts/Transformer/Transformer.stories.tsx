import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
// Importa l'entrypoint del layout (index.ts)
import TransformerLayout from './index';

/**
 * Questa configurazione fa riferimento al layout "Transformer"
 * che internamente utilizza un Provider, animazioni con GSAP
 * e un Header con eventuali navbar items.
 */
const meta: Meta<typeof TransformerLayout> = {
  title: 'layouts/Transformer',
  component: TransformerLayout,
  // Aggiungiamo un decorator che avvolge il componente nel Router
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      autodocs: 'tag',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TransformerLayout>;

/**
 * Storia di base per visualizzare l’intero layout con
 * una semplice configurazione di default.
 */
export const Default: Story = {
  args: {
    background: {
      opacity: 10,
      image: 'white_background.png',
      imageDark: 'dark_background.png',
    },
    navbarItems: [
      { icon: '🏠', label: 'Home', value: '/home' },
      { icon: '📁', label: 'Docs', value: '/docs' },
    ],
    navbarSubItems: [
      { icon: '💡', label: 'Tutorial', value: '/docs/tutorial', group: ['docs'] },
      { icon: '⚙️', label: 'API', value: '/docs/api', group: ['docs'] },
    ],
    logo: '/logo192.png',
    navigationScroll: true,
    children: (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Contenuto Principale</h2>
        <p>Qui finisce il contenuto del layout Transformer.</p>
      </div>
    ),
  },
};
