import type { Meta, StoryObj } from '@storybook/react';
import SectionCardRow from './SectionCardRow';

export default {
    title: 'Components/SectionCardRow',
    component: SectionCardRow,
    tags: ['autodocs'],
} as Meta<typeof SectionCardRow>;

type Story = StoryObj<typeof SectionCardRow>;

export const Default: Story = {
    args: {
        field: 'Nome',
        value: 'Mario Rossi',
    },
};
