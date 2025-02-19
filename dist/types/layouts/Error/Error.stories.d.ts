import type { Meta, StoryObj } from '@storybook/react';
import ErrorLayout from './index';
declare const meta: Meta<typeof ErrorLayout>;
export default meta;
type Story = StoryObj<typeof ErrorLayout>;
/**
 * Storia di base che mostra il layout Error
 * con un semplice messaggio di errore.
 */
export declare const Default: Story;
