import type { Meta, StoryObj } from '@storybook/react';
import Component from './ErrorLayout'; // Assicurati che il path punti correttamente al tuo file

/**
 * Meta: informazioni sulla storia
 * ----------------------------------------------------------------------------
 * - `title`: Specifica la posizione del componente nel menu di Storybook.
 * - `component`: Collega il componente React da documentare.
 * - `tags`: Utilizzato per aggiungere metadati (come 'autodocs').
 * - `parameters`: Configura impostazioni aggiuntive (es. layout).
 */
const meta: Meta<typeof Component> = {
  title: 'Pages/Error', // Organizza il componente in Pages -> Error
  component: Component, // Collega il componente
  tags: ['autodocs'], // Genera automaticamente la documentazione
  parameters: {
    layout: 'fullscreen', // Mostra il componente a schermo intero
  },
};

export default meta;

// Tipo per le storie
type Story = StoryObj<typeof meta>;

/**
 * Default: Storia di base
 * ----------------------------------------------------------------------------
 * Mostra il componente così com’è, senza personalizzazioni.
 */
export const Default: Story = {};

/**
 * WithCustomDocs: Storia con una descrizione personalizzata
 * ----------------------------------------------------------------------------
 * Non modifica il componente ma aggiunge una documentazione
 * più dettagliata nella sezione Docs di Storybook.
 */
export const WithCustomDocs: Story = {
  name: 'Error with custom docs', // Nome personalizzato della storia
  parameters: {
    docs: {
      description: {
        story: `
          La pagina di errore viene utilizzata per informare l'utente
          che si è verificato un errore durante l'esecuzione dell'applicazione.
          
          Questo componente utilizza:
          - Chakra UI per il layout e le icone.
          - Un componente personalizzato (\`EmptyState\`) per strutturare
            l'icona, il titolo e la descrizione.
          
          Non accetta props ma può essere esteso per includere messaggi
          di errore dinamici o contesti specifici.
        `,
      },
    },
  },
};

/**
 * LongContentScenario: Storia per scenari con contenuto lungo
 * ----------------------------------------------------------------------------
 * Questa storia illustra l'utilizzo del componente in un contesto
 * in cui l'applicazione potrebbe mostrare contenuti molto lunghi.
 * Sebbene il layout sia fisso, lo scenario serve a mostrare l'uso
 * del componente in ambienti di test o produzione.
 */
export const LongContentScenario: Story = {
  name: 'Error in a long-content scenario',
  parameters: {
    docs: {
      description: {
        story: `
          Questa variante mostra come l'Error si adatta in
          contesti in cui la pagina potrebbe includere contenuti
          molto lunghi o complessi. Sebbene il componente non gestisca
          lo scrolling direttamente, il layout centrato garantisce che
          l'errore sia sempre visibile nella viewport.
        `,
      },
    },
  },
};
