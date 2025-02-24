import { ParsedColumn, ParsedRow, ParsedTableData } from "../liquidTable.types";

/**
 * Trasforma una stringa camelCase in una forma "First Name".
 * - La prima lettera viene messa maiuscola.
 * - Eventuali ulteriori lettere maiuscole vengono precedute da uno spazio.
 */
function prettifyFieldName(fieldName: string): string {
    if (!fieldName) return "";

    // 1. Sostituisci gli underscore con uno spazio
    let replaced = fieldName.replace(/_/g, " ");
    
    // 2. Inserisci uno spazio prima di ogni lettera maiuscola (tranne la prima)
    replaced = replaced.replace(/([A-Z])/g, " $1");
    
    // 3. Rimpiazza eventuali spazi multipli con uno singolo e trimma la stringa
    replaced = replaced.replace(/\s+/g, " ").trim();
    
    // 4. Capitalizza la prima lettera dell'intera stringa
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}

export function parseItems(items: Record<string, any>[], hiddenFields: string[] = []): ParsedTableData {
    if (!items || items.length === 0) {
        return { columns: [], rows: [] };
    }

    const allFields = new Set<string>();
    items.forEach((obj) => {
        Object.keys(obj).forEach((key) => allFields.add(key));
    });

    const columns: ParsedColumn[] = Array.from(allFields).map((fieldKey) => {
        const shouldHide = hiddenFields.includes(fieldKey);

        return { field: fieldKey, label: prettifyFieldName(fieldKey), visible: !shouldHide, isNumeric: false, };
    });

    // Creiamo le righe
    const rows: ParsedRow[] = items.map((item, index) => ({
        id: item.id ?? String(index),
        data: item,
    }));

    return { columns, rows };
}