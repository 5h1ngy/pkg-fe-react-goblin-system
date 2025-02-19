import type { Meta, StoryObj } from '@storybook/react';
import LoadingLayout from './index';
declare const meta: Meta<typeof LoadingLayout>;
export default meta;
type Story = StoryObj<typeof LoadingLayout>;
/**
 * Storia di base che mostra il layout di caricamento.
 * Include una barra di progresso e un’icona di “loader”.
 */
export declare const Default: Story;
