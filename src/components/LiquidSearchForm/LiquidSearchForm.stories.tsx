import type { Meta, StoryObj } from '@storybook/react';
import LiquidSearchForm from './LiquidSearchForm';
import { z } from 'zod';
import { withMeta } from '@/components/Factory/DynamicForm/DynamicForm';

// Definiamo uno schema di base per testare la LiquidSearchForm
const baseSchema = z
  .object({
    search: withMeta(
      z.string().optional(),
      { label: 'Testo di Ricerca', step: 0 }
    ),
    category: withMeta(
      z.enum(['all', 'books', 'electronics']).default('all'),
      { label: 'Categoria', step: 0 }
    ),
  })
  .superRefine(() => {});

// Uno schema più esteso con più campi, se vogliamo provarlo
const advancedSchema = z
  .object({
    search: withMeta(
      z.string().optional(),
      { label: 'Testo di Ricerca', step: 0 }
    ),
    category: withMeta(
      z.enum(['all', 'books', 'electronics', 'music']).default('all'),
      { label: 'Categoria', step: 0 }
    ),
    minPrice: withMeta(
      z.number().min(0).default(0),
      { label: 'Prezzo Minimo', step: 0, row: 'row-1' }
    ),
    maxPrice: withMeta(
      z.number().min(0).default(9999),
      { label: 'Prezzo Massimo', step: 0, row: 'row-1' }
    ),
  })
  .superRefine((data, ctx) => {
    // Esempio di validazione custom: maxPrice >= minPrice
    if (data.maxPrice < data.minPrice) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['maxPrice'],
        message: 'Prezzo Massimo non può essere minore del Prezzo Minimo',
      });
    }
  });

export default {
  title: 'Components/LiquidSearchForm',
  component: LiquidSearchForm,
  tags: ['autodocs'],
} as Meta<typeof LiquidSearchForm>;

type Story = StoryObj<typeof LiquidSearchForm>;

/**
 * STORIA 1 - Default
 * Usa lo schema base con "search" e "category".
 */
export const Default: Story = {
  args: {
    schema: baseSchema,
  },
};

/**
 * STORIA 2 - Schema Avanzato
 * Aggiunge campi minPrice e maxPrice.
 */
export const Advanced: Story = {
  args: {
    schema: advancedSchema,
  },
};

/**
 * STORIA 3 - Nessuno schema (se lo desideri), ma ATTENZIONE:
 * LiquidSearchForm si aspetta T extends z.ZodEffects<ZodObject<...>>,
 * se lo lasci null/undefined, potrebbe rompersi a runtime.
 * Lo mostriamo a scopo dimostrativo: potrebbe generare errore
 * "Cannot read properties of undefined (reading 'innerType')".
 */
export const NoSchema: Story = {
  args: {
    schema: undefined as any, // Forziamo un cast a `any` per farlo passare 
  },
};
