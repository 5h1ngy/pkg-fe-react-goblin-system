import type { Meta, StoryObj } from '@storybook/react';
// Importa l'entrypoint del layout (index.ts) 
import ErrorLayout from './index';

const meta: Meta<typeof ErrorLayout> = {
  title: 'Layouts/Error',       // <--- Titolo con prefisso "layouts/"
  component: ErrorLayout,
  // Abilita AutoDocs
  parameters: {
    docs: {
      autodocs: 'tag',
    },
  },
  // Se vuoi aggiungere una breve descrizione
  // puoi usare un commento JSDoc oppure un campo “tags”:
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ErrorLayout>;

/**
 * Storia di base che mostra il layout Error 
 * con un semplice messaggio di errore.
 */
export const Default: Story = {
  args: {
    // Non ci sono prop da passare all'Error layout, 
    // ma se in futuro ne aggiungessi, impostali qui.
  },
};
