import { z, ZodArray, ZodDefault, ZodEffects, ZodNullable, ZodOptional, ZodTypeAny } from 'zod';

export const getMaxStep = (schema: z.ZodObject<any>): number => {
    let maxStep = -Infinity;
    const schemaShape = schema.shape;

    for (const key in schemaShape) {
        const fieldMeta = (schemaShape[key] as any)?.meta;

        if (fieldMeta?.step !== undefined && fieldMeta?.step > maxStep) {
            maxStep = fieldMeta.step;
        }
    }

    return maxStep === -Infinity ? 0 : maxStep;
};

export function getBaseType(schema: ZodTypeAny): ZodTypeAny {
    while (true) {
        if (schema instanceof ZodOptional || schema instanceof ZodNullable) {
            schema = schema.unwrap();

        } else if (schema instanceof ZodDefault) {
            schema = schema.removeDefault();

        } else if (schema instanceof ZodArray) {
            schema = schema.element;

        } else if (schema instanceof ZodEffects) {
            schema = schema.innerType();
            
        } else {
            break;
        }
    }

    return schema;
}