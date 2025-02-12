import { DefaultValues, useForm } from 'react-hook-form';
import { TypeOf, z, ZodObject } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { MetaSchema } from '../dynamicForm.types';

/**
 * @typedef {Array<Record<string, [string, unknown][]>>} Fields
 * Represents the structured fields data. Each step is an array of rows, 
 * where each row is a record of field name and schema tuples.
 */
export type Fields = Array<Record<string, [string, unknown][]>>

/**
 * Normalizes form fields based on a Zod schema for use with react-hook-form.
 * 
 * @template T - A Zod schema object.
 * @param {T} schema - The Zod schema defining the structure and metadata of the form.
 * @returns {Object} - An object containing:
 * - `fields`: The normalized field structure organized by steps and rows.
 * - `methods`: React Hook Form methods bound to the Zod schema.
 * 
 * @example
 * ```typescript
 * const schema = z.object({
 *   name: z.string().meta({ row: 1, step: 0 }),
 *   age: z.number().meta({ row: 2, step: 0 })
 * });
 * 
 * const { fields, methods } = useNormalizeFields(schema);
 * ```
 */
export function useNormalizeFields<T extends z.ZodEffects<ZodObject<any>>>(schema: T, defaultValues?: DefaultValues<TypeOf<T>> | undefined) {

    // Initialize react-hook-form with a Zod resolver
    const methods = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    // Normalize the schema's shape into a structured field object
    const fields = schema.innerType().shape
        ? Object.entries(schema.innerType().shape)
            .reduce((fields: Fields, [name, fieldSchema]) => {
                const typedFieldSchema = fieldSchema as MetaSchema;

                // Extract metadata for step and row organization
                const step: number = typedFieldSchema.meta?.step || 0;
                const key: string = typedFieldSchema.meta?.row?.toString() || '__NO_ROW__';

                // Define the field's schema shape as a tuple
                const shape = [name, fieldSchema] as [string, unknown];

                // Ensure the step exists in the fields structure
                if (!fields[step]) {
                    fields[step] = {};
                }

                // Ensure the row exists within the current step
                if (!fields[step][`${key}`]) {
                    fields[step][`${key}`] = [shape];
                } else {
                    // Append the current field to the existing row
                    const rowData = fields[step][`${key}`];
                    fields[step][`${key}`] = [...rowData, shape];
                }

                return fields;
            }, [])
        : [];

    return { fields, methods };
}
