import { z } from 'zod';
import { withMeta } from '@/components/Factory/DynamicForm/dynamicFormFactory.types';
import { store } from "@/store/root.store";

const schema = z.object({
    "first_name": withMeta(
        z.string().trim()
            .min(2, {
                message: 'Il nome deve contenere almeno 2 caratteri'
            })
            .max(50, {
                message: 'Il nome non può superare i 50 caratteri'
            }),
        { label: 'Nome', autocomplete: "first-name", row: 'row-1' }
    ),
    "last_name": withMeta(
        z.string().trim()
            .min(2, {
                message: 'Il cognome deve contenere almeno 2 caratteri'
            })
            .max(50, {
                message: 'Il cognome non può superare i 50 caratteri'
            }),
        { label: 'Cognome', autocomplete: "last-name", row: 'row-1' }
    ),
    "gender": withMeta(
        z.enum(["male", "female"]).nullable().default(null),
        { label: 'Gender', labels: ["Male", "Female"], autocomplete: "gender", row: 'row-2' }
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
        { label: 'Data di Nascita', autocomplete: "bday", row: 'row-3' }
    ),
}).superRefine((_) => { });

export const defaultValues = {
    "first_name": store.getState().profileSlice.overview.occurrence?.first_name ?? "",
    "last_name": store.getState().profileSlice.overview.occurrence?.last_name ?? "",
    "gender": store.getState().profileSlice.overview.occurrence?.gender ?? "",
    "bday": store.getState().profileSlice.overview.occurrence?.bday ?? "",
};

const inputs = schema.innerType()
type FormInputs = z.infer<typeof inputs>;

export { schema };
export type { FormInputs };
