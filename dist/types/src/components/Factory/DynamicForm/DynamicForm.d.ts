import { z, ZodObject, ZodTypeAny } from 'zod';
import { ComponentProps, Meta, MetaSchema } from './dynamicForm.types';
export declare function withMeta<T extends ZodTypeAny>(schema: T, meta?: Meta): MetaSchema;
declare function DynamicForm<T extends z.ZodEffects<ZodObject<any>>>({ width, schema, defaultValues, step, onNext, onBack, render, }: ComponentProps<T>): import("react").JSX.Element;
export default DynamicForm;
