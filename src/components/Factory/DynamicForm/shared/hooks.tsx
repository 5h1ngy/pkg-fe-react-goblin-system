import { DefaultValues, useForm } from 'react-hook-form';
import { TypeOf, z, ZodObject } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { MetaSchema } from '../dynamicForm.types';
import { Fields } from './hooks.types';

export function useNormalizeFields<T extends z.ZodEffects<ZodObject<any>>>(
    schema: T,
    defaultValues?: DefaultValues<TypeOf<T>> | undefined
) {

    console.log(schema)
    debugger;

    const methods = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues,
    });

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


    console.log(fields)
    debugger;

    return { fields, methods };
}
