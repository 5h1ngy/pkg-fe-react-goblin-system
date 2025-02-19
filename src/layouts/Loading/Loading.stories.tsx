import type { Meta, StoryObj } from '@storybook/react';
// Importa l'entrypoint del layout (index.ts)
import LoadingLayout from './index';

const meta: Meta<typeof LoadingLayout> = {
  title: 'layouts/Loading',
  component: LoadingLayout,
  parameters: {
    docs: {
      autodocs: 'tag',
    },
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof LoadingLayout>;

/**
 * Storia di base che mostra il layout di caricamento.
 * Include una barra di progresso e un’icona di “loader”.
 */
export const Default: Story = {
  args: {
    // Se un giorno `LoadingLayout` accettasse parametri,
    // potresti gestirli da qui.
  },
};
