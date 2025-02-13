import { ZodObject } from 'zod';
import { ComponentProps } from './field.types';
declare function Field<T extends ZodObject<any>>({ methods, name, meta, fieldSchema, }: ComponentProps<T>): import("react").JSX.Element;
export default Field;
