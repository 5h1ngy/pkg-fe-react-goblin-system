import { z } from 'zod';
import { withMeta } from '@/components/Factory/DynamicForm/dynamicFormFactory.types';
import { store } from "@/store/root.store";

const schema = z.object({
    "username": withMeta(
        z.string().trim(),
        { label: 'Nickname', autocomplete: "username", row: 'row-1' }
    ),
    "email": withMeta(
        z.string()
            .trim()
            .toLowerCase()
            .email({ message: 'Inserisci un’email valida' }),
        { label: 'Email', autocomplete: "email", row: 'row-2' }
    ),
    "confirm_email": withMeta(
        z.string()
            .trim()
            .toLowerCase()
            .email({ message: 'Inserisci un’email valida' }),
        { label: 'Ripeti Email', autocomplete: "confirm-email", row: 'row-2' }
    ),
    "password": withMeta(
        z.string()
            .trim()
            .min(6, { message: 'La password deve contenere almeno 6 caratteri' })
            .max(100, { message: 'La password non può superare i 100 caratteri' })
            .regex(/[A-Z]/, { message: 'La password deve contenere almeno una lettera maiuscola' })
            .regex(/\d/, { message: 'La password deve contenere almeno un numero' }),
        { label: 'Password', autocomplete: "password", row: 'row-3' }
    ),
    "confirm_password": withMeta(
        z.string()
            .trim()
            .min(6, { message: 'La password deve contenere almeno 6 caratteri' })
            .max(100, { message: 'La password non può superare i 100 caratteri' }),
        { label: 'Ripeti Password', autocomplete: "confirm-password", row: 'row-3' }
    ),
}).superRefine((data, ctx) => {

    if (data.email !== data.confirm_email) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Le email non coincidono.',
            path: ['confirm_email'],
        });
    }

    if (data.password !== data.confirm_password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Le password non coincidono.',
            path: ['confirm_password'],
        });
    }
});

export const defaultValues = {
    "username": store.getState().profileSlice.overview.occurrence?.username ?? "",
    "email": store.getState().profileSlice.overview.occurrence?.email ?? "",
};

const inputs = schema.innerType()
type FormInputs = z.infer<typeof inputs>;

export { schema };
export type { FormInputs };
