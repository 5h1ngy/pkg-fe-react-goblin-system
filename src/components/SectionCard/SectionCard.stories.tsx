import type { Meta, StoryObj } from '@storybook/react';
import SectionCard from './SectionCard';
import { STATUS } from './sectionCard.types';

export default {
  title: 'Components/SectionCard',
  component: SectionCard,
  tags: ['autodocs'],
} as Meta<typeof SectionCard>;

type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
  args: {
    status: STATUS.SUCCESS,
    isEmpty: false,
    header: { avatar: 'Mario Rossi', title: 'Profilo' },
    subHeader: { content: 'Informazioni Aggiuntive' },
    body: {
      content: 'Contenuto principale',
      disableStyle: false,
    },
    empty: {
      icon: undefined,
      title: 'Nessun dato',
      description: 'Nessun risultato trovato.',
    },
  },
};
