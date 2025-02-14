import { ParsedColumn, ParsedRow, ParsedTableData } from "../liquidTable.types";

/**
 * Trasforma una stringa camelCase in una forma "First Name".
 * - La prima lettera viene messa maiuscola.
 * - Eventuali ulteriori lettere maiuscole vengono precedute da uno spazio.
 */
function prettifyFieldName(fieldName: string): string {
    if (!fieldName) return "";

    // 1. Inserisce uno spazio prima di ogni lettera maiuscola (tranne la prima).
    //    Esempio: "firstName" -> "first Name"
    //    Poi la prima lettera verrà capitalizzata nel passo successivo.
    let spaced = fieldName.replace(/([A-Z])/g, " $1");

    // 2. Trim per rimuovere eventuali spazi iniziali
    spaced = spaced.trim();

    // 3. Capitalizza la prima lettera dell'intera stringa
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
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