import type { Meta, StoryObj } from '@storybook/react';
import LiquidTable from './LiquidTable';
import withContext from './shared/Provider'; 
import { ComponentProps } from './liquidTable.types';

/**
 * Questo default export dichiara la configurazione generale di Storybook
 * per la nostra LiquidTable. "Components/LiquidTable" è il percorso di
 * navigazione che vedrai nell'interfaccia di Storybook.
 */
export default {
  title: 'Components/LiquidTable', 
  component: LiquidTable,
  tags: ['autodocs'],
} as Meta<ComponentProps>;

/**
 * Creiamo un "template" che avvolge la LiquidTable col suo Provider.
 *
 * NOTE: LiquidTable di base è già avvolta da "withContext" in LiquidTable/index.ts,
 * ma se vuoi testare LiquidTable.tsx nudo e crudo devi wrapparlo qui.
 * In questo esempio, usiamo "withContext(LiquidTable)" manualmente, 
 * così passiamo correttamente "items", "hiddenFields", "pagination" ecc.
 */
const Template = (args: ComponentProps) => {
  // Creiamo il componente "LiquidTable con Provider"
  const LiquidTableWithContext = withContext(LiquidTable);
  // Ritorniamo la tabella con i suoi props iniettatI
  return <LiquidTableWithContext {...args} />;
};

type Story = StoryObj<ComponentProps>;

/**
 * STORIA 1 - Default
 * Tabella con due righe, e paginazione abilitata.
 */
export const Default: Story = {
  render: Template,
  args: {
    items: [
      { id: '1', firstName: 'Mario', lastName: 'Rossi', age: 30 },
      { id: '2', firstName: 'Luigi', lastName: 'Bianchi', age: 40 },
    ],
    hiddenFields: [],
    pagination: {
      offset: 1,
      size: 10,
      totalOccurrences: 2,
      totalPages: 1,
    },
  },
};

/**
 * STORIA 2 - Senza paginazione
 * Tabella con 3 righe, ma nessun oggetto pagination.
 */
export const NoPagination: Story = {
  render: Template,
  args: {
    items: [
      { id: '1', firstName: 'Mario', lastName: 'Rossi', age: 30 },
      { id: '2', firstName: 'Luigi', lastName: 'Bianchi', age: 40 },
      { id: '3', firstName: 'Pippo', lastName: 'Verdi', age: 25 },
    ],
    hiddenFields: [],
    // pagination: undefined => tabella non mostrerà i controlli di pagination
  },
};

/**
 * STORIA 3 - Con campi nascosti
 * Tabella che nasconde "age".
 */
export const WithHiddenFields: Story = {
  render: Template,
  args: {
    items: [
      { id: '1', firstName: 'Mario', lastName: 'Rossi', age: 30 },
      { id: '2', firstName: 'Luigi', lastName: 'Bianchi', age: 40 },
    ],
    hiddenFields: ['age'], // Nascondi la colonna "age"
    pagination: {
      offset: 1,
      size: 10,
      totalOccurrences: 2,
      totalPages: 1,
    },
  },
};

/**
 * STORIA 4 - Lista vuota
 * Tabella che non ha righe da mostrare.
 */
export const Empty: Story = {
  render: Template,
  args: {
    items: [], // Nessun elemento
    hiddenFields: [],
    pagination: {
      offset: 1,
      size: 10,
      totalOccurrences: 0,
      totalPages: 0,
    },
  },
};
