import type { Meta, StoryObj } from '@storybook/react';
import Component from './LoadingLayout.component'; // Assicurati che il path punti correttamente al tuo file

/**
 * `meta` descrive la componente in Storybook:
 * - `title` specifica la cartella e il nome con cui comparirà nel menu di Storybook
 * - `component` è il componente React da documentare
 * - `tags` e `parameters` sono opzionali per impostazioni aggiuntive
 */
const meta: Meta<typeof Component> = {
  title: 'Pages/Loading',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Il componente occupa l'intera viewport
  },
  // Poiché Loading non accetta props, non definiamo argomenti di default
};

export default meta;

// Definisce il tipo "Story" per usare Storybook in TypeScript
type Story = StoryObj<typeof meta>;

/**
 * Storia base: mostra il Loading così com’è
 */
export const Default: Story = {};

/**
 * Storia con una descrizione personalizzata
 * (in questo caso, essendo il componente "statico",
 *  non ci sono props da passare, ma aggiungiamo un docstring a scopo illustrativo)
 */
export const WithCustomDocs: Story = {
  name: 'Loading with custom docs',
  // Se il componente avesse props, potresti impostarle in `args: { ... }`
  // args: { title: 'Caricamento in corso...' } // Esempio, se avessi una prop "title"
  parameters: {
    docs: {
      description: {
        story: `
          Questo esempio mostra una variante del Loading con documentazione personalizzata.
          Se il tuo componente accettasse parametri (props) per cambiare titolo, icona o descrizione, 
          potresti impostarli in \`args\`.
        `,
      },
    },
  },
};

/**
 * Storia pensata per mostrare come appare il Loading
 * in uno scenario di "contenuto molto lungo".
 * In realtà, Loading non gestisce il contenuto,
 * ma puoi usare la sezione Docs per spiegare l'uso in contesti reali.
 */
export const LongContent: Story = {
  name: 'Loading in long-content scenario',
  parameters: {
    docs: {
      description: {
        story: `
          Immagina che il Loading venga utilizzato mentre stai caricando
          una pagina o una sezione con contenuto molto lungo. 
          Non cambia l'aspetto del Loading, ma illustra il suo utilizzo contestuale.
        `,
      },
    },
  },
};
