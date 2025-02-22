import type { Meta, StoryObj } from '@storybook/react';
import TransformerLayout from './index';
/**
 * Questa configurazione fa riferimento al layout "Transformer"
 * che internamente utilizza un Provider, animazioni con GSAP
 * e un Header con eventuali navbar items.
 */
declare const meta: Meta<typeof TransformerLayout>;
export default meta;
type Story = StoryObj<typeof TransformerLayout>;
/**
 * Storia di base per visualizzare l’intero layout con
 * una semplice configurazione di default.
 */
export declare const Default: Story;
