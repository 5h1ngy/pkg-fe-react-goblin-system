import { DefaultValues } from 'react-hook-form';
import { TypeOf, z, ZodObject } from 'zod';
import { Fields } from './hooks.types';
export declare function useNormalizeFields<T extends z.ZodEffects<ZodObject<any>>>(schema: T, defaultValues?: DefaultValues<TypeOf<T>> | undefined): {
    fields: Fields;
    methods: import("react-hook-form").UseFormReturn<TypeOf<T>, any, undefined>;
};
