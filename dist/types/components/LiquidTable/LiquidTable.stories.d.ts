import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from './liquidTable.types';
/**
 * Questo default export dichiara la configurazione generale di Storybook
 * per la nostra LiquidTable. "Components/LiquidTable" è il percorso di
 * navigazione che vedrai nell'interfaccia di Storybook.
 */
declare const _default: Meta<ComponentProps>;
export default _default;
type Story = StoryObj<ComponentProps>;
/**
 * STORIA 1 - Default
 * Tabella con due righe, e paginazione abilitata.
 */
export declare const Default: Story;
/**
 * STORIA 2 - Senza paginazione
 * Tabella con 3 righe, ma nessun oggetto pagination.
 */
export declare const NoPagination: Story;
/**
 * STORIA 3 - Con campi nascosti
 * Tabella che nasconde "age".
 */
export declare const WithHiddenFields: Story;
/**
 * STORIA 4 - Lista vuota
 * Tabella che non ha righe da mostrare.
 */
export declare const Empty: Story;
