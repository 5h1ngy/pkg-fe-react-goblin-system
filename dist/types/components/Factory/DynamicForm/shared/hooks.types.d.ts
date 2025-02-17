/**
 * @typedef {Array<Record<string, [string, unknown][]>>} Fields
 * Represents the structured fields data. Each step is an array of rows,
 * where each row is a record of field name and schema tuples.
 */
export type Fields = Array<Record<string, [string, unknown][]>>;
