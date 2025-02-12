import { FC } from "react";
import { Table } from "@chakra-ui/react"

import { Checkbox } from "@/components/Factory/Chakra/checkbox";

import { useTableContext } from "./shared/hooks";

const DynamicTable: FC = () => {
    const { columns, rows, select } = useTableContext();

    const hasSelection = select.selection.length > 0;
    const indeterminate = hasSelection && select.selection.length < rows.length;

    return <Table.Header>
        <Table.Row bg="bg.subtle">
            <Table.ColumnHeader w="6">
                <Checkbox
                    top="1" aria-label="Select all rows"
                    checked={indeterminate ? "indeterminate" : select.selection.length > 0}
                    onCheckedChange={(changes) => changes.checked
                        ? select.setSelection(rows.map((row) => row.id))
                        : select.setSelection([])
                    }
                />
            </Table.ColumnHeader>

            {/* Colonne dinamiche (filtrando quelle visibili) */}
            {columns.filter((col) => col.visible).map((col) =>
                <Table.ColumnHeader key={crypto.randomUUID()}
                    textAlign={col.isNumeric ? "end" : "start"}
                >
                    {col.label}
                </Table.ColumnHeader>
            )}
        </Table.Row>
    </Table.Header>
};

export default DynamicTable;
