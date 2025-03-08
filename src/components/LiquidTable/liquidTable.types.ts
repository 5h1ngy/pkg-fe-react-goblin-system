export type Item = Record<string, any>;

export type Pagination = {
    offset: number;
    size: number;
    totalOccurrences: number,
    totalPages: number,
}

export type ComponentProps = {
    items: Item[];
    hiddenFields?: string[];
    pagination?: Pagination;
}

export type ParsedColumn = {
    field: string;
    label: string;
    visible: boolean;
    isNumeric?: boolean;
};

export type ParsedRow = {
    id: string;
    data: Record<string, any>;
};

export type ParsedTableData = {
    columns: ParsedColumn[];
    rows: ParsedRow[];
};

export type ContextType = {
    select: { selection: string[], setSelection: React.Dispatch<React.SetStateAction<string[]>> }
    columns: ParsedColumn[];
    rows: ParsedRow[];
    pagination?: Pagination;
}