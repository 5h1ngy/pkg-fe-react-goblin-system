import { Path, UseFormReturn } from 'react-hook-form';
import { z, ZodObject, ZodTypeAny } from 'zod';
import { Meta } from "./dynamicForm.types";
/**
 * Props definition for the dynamic field component.
 *
 * @template T - A Zod schema object defining the form's structure and validation.
 * @property {UseFormReturn<z.TypeOf<T>, any, undefined>} methods - The react-hook-form methods used for form state and validation.
 * @property {Path<z.infer<T>>} name - The name of the field, used as the key for form state and validation.
 * @property {Meta} [meta] - Optional metadata for the field, such as labels, tooltips, or other descriptive information.
 * @property {ZodTypeAny} fieldSchema - The Zod schema definition for the specific field.
 *
 * @example
 * ```typescript
 * interface Meta {
 *   label?: string;
 *   tooltip?: string;
 * }
 *
 * const schema = z.object({
 *   username: z.string(),
 *   password: z.string()
 * });
 *
 * const props: ComponentProps<typeof schema> = {
 *   methods: useForm({ defaultValues: schema.parse({ username: '', password: '' }) }),
 *   name: "username",
 *   meta: { label: "Username" },
 *   fieldSchema: schema.shape.username
 * };
 * ```
 */
export interface ComponentProps<T extends ZodObject<any>> {
    methods: UseFormReturn<z.TypeOf<T>, any, undefined>;
    name: Path<z.infer<T>>;
    meta?: Meta;
    fieldSchema: ZodTypeAny;
}
