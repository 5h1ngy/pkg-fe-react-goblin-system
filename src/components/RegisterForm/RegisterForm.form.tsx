import { z } from 'zod';
import { withMeta } from '@/components/Factory/DynamicForm/dynamicForm.types';

const schema = z.object({
    /**
     * STEP: 0
     */
    "first_name": withMeta(
        z.string().trim()
            .min(2, {
                message: 'Il nome deve contenere almeno 2 caratteri'
            })
            .max(50, {
                message: 'Il nome non può superare i 50 caratteri'
            }),
        { label: 'Nome', autocomplete: "first-name", row: 'row-1', step: 0 }
    ),
    "last_name": withMeta(
        z.string().trim()
            .min(2, {
                message: 'Il cognome deve contenere almeno 2 caratteri'
            })
            .max(50, {
                message: 'Il cognome non può superare i 50 caratteri'
            }),
        { label: 'Cognome', autocomplete: "last-name", row: 'row-1', step: 0 }
    ),
    "bday": withMeta(
        z.coerce.date({
            required_error: 'La data di nascita è obbligatoria',
            invalid_type_error: 'Formato data non valido',
        }).max(new Date(), {
            message: 'La data non può essere nel futuro'
        })
        // .transform(date => date.toISOString().split("T")[0]), // Converti in YYYY-MM-DD,
        .transform(date => date.getTime()), // Converti in timestamp epoch
        { label: 'Data di Nascita', autocomplete: "bday", row: 'row-2', step: 0 }
    ),
    /**
     * STEP: 1
     */
    "username": withMeta(
        z.string().trim(),
        { label: 'Nickname', autocomplete: "username", step: 1, style: { width: { "sm": "20rem" } } }
    ),
    "gender": withMeta(
        z.enum(["male", "female"]).nullable().default(null),
        { label: 'Gender', labels: ["Male", "Female"], autocomplete: "gender", step: 1, style: { width: { "sm": "20rem" } } }
    ),
    /**
     * STEP: 2
     */
    "email": withMeta(
        z.string()
            .trim()
            .toLowerCase()
            .email({ message: 'Inserisci un’email valida' }),
        { label: 'Email', autocomplete: "email", row: 'row-3', step: 2 }
    ),
    "confirm_email": withMeta(
        z.string()
            .trim()
            .toLowerCase()
            .email({ message: 'Inserisci un’email valida' }),
        { label: 'Ripeti Email', autocomplete: "confirm-email", row: 'row-3', step: 2 }
    ),
    "password": withMeta(
        z.string()
            .trim()
            .min(6, { message: 'La password deve contenere almeno 6 caratteri' })
            .max(100, { message: 'La password non può superare i 100 caratteri' })
            .regex(/[A-Z]/, { message: 'La password deve contenere almeno una lettera maiuscola' })
            .regex(/\d/, { message: 'La password deve contenere almeno un numero' }),
        { label: 'Password', autocomplete: "password", row: 'row-4', step: 2 }
    ),
    "confirm_password": withMeta(
        z.string()
            .trim()
            .min(6, { message: 'La password deve contenere almeno 6 caratteri' })
            .max(100, { message: 'La password non può superare i 100 caratteri' }),
        { label: 'Ripeti Password', autocomplete: "confirm-password", row: 'row-4', step: 2 }
    ),
}).superRefine((data, ctx) => {
    // Controllo che email e conferma email siano uguali
    if (data.email !== data.confirm_email) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Le email non coincidono.',
            path: ['confirm_email'],
        });
    }

    // Controllo che password e conferma password siano uguali
    if (data.password !== data.confirm_password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Le password non coincidono.',
            path: ['confirm_password'],
        });
    }
});

const inputs = schema.innerType()
type FormInputs = z.infer<typeof inputs>;

export { schema };
export type { FormInputs };
