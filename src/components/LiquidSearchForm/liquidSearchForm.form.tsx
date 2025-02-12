import { UnknownKeysParam, z, ZodObject, ZodTypeAny } from 'zod';

type FormInputs = z.infer<ZodObject<any, UnknownKeysParam, ZodTypeAny, { [x: string]: any; }, { [x: string]: any; }>>;

export const getMaxStep = (schema: z.ZodObject<any>): number => {
    let maxStep = -Infinity;
    const schemaShape = schema.shape;

    for (const key in schemaShape) {
        const fieldMeta = (schemaShape[key] as any)?._def?.meta;
        if (fieldMeta?.step !== undefined && fieldMeta?.step > maxStep) {
            maxStep = fieldMeta.step;
        }
    }

    return maxStep === -Infinity
        ? 0
        : maxStep;
};

export type { FormInputs }