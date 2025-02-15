import { UnknownKeysParam, z, ZodObject, ZodTypeAny } from 'zod';
type FormInputs = z.infer<ZodObject<any, UnknownKeysParam, ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>>;
export declare const getMaxStep: (schema: z.ZodObject<any>) => number;
export type { FormInputs };
//# sourceMappingURL=liquidSearchForm.form.d.ts.map