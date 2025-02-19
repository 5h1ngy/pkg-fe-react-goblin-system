import type { Meta, StoryObj } from '@storybook/react';
import LiquidSearchForm from './LiquidSearchForm';
declare const _default: Meta<typeof LiquidSearchForm>;
export default _default;
type Story = StoryObj<typeof LiquidSearchForm>;
/**
 * STORIA 1 - Default
 * Usa lo schema base con "search" e "category".
 */
export declare const Default: Story;
/**
 * STORIA 2 - Schema Avanzato
 * Aggiunge campi minPrice e maxPrice.
 */
export declare const Advanced: Story;
/**
 * STORIA 3 - Nessuno schema (se lo desideri), ma ATTENZIONE:
 * LiquidSearchForm si aspetta T extends z.ZodEffects<ZodObject<...>>,
 * se lo lasci null/undefined, potrebbe rompersi a runtime.
 * Lo mostriamo a scopo dimostrativo: potrebbe generare errore
 * "Cannot read properties of undefined (reading 'innerType')".
 */
export declare const NoSchema: Story;
