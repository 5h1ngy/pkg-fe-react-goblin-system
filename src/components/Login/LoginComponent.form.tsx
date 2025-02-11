import { z } from 'zod';

import { withMeta } from '@/components/Factory/DynamicForm/dynamicFormFactory.types';

const schema = z.object({
    "id": withMeta(
        z.string().trim(),
        { label: 'Email/Username', autocomplete: "username" }
    ),
    "password": withMeta(
        z.string().min(6, { message: 'La password deve contenere almeno 6 caratteri' }),
        { label: 'Password', autocomplete: "password" }
    ),
    "stay_logged": withMeta(
        z.boolean().default(false),
        { label: 'Stay logged' }
    ),
}).superRefine((_data, _ctx) => {

});

const inputs = schema.innerType()
type FormInputs = z.infer<typeof inputs>;

export { schema }
export type { FormInputs }