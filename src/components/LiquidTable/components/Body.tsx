import { FC } from "react";
import { Table } from "@chakra-ui/react"

import { Checkbox } from "@/components/Factory/Chakra/checkbox";
import { useTableContext } from "../shared/hooks";

const DynamicTable: FC = () => {
    const { columns, rows, select } = useTableContext();

    return <Table.Body>
        {rows.map((row) => (
            <Table.Row key={crypto.randomUUID()}>
                <Table.Cell>
                    <Checkbox
                        top="1"
                        aria-label="Select row"
                        checked={select.selection.includes(row.id)}
                        onCheckedChange={(changes: { checked: boolean }) => select.setSelection((prev) => changes.checked
                            ? [...prev, row.id]
                            : prev.filter((id) => id !== row.id))
                        }
                    />
                </Table.Cell>

                {/* Celle dinamiche per ogni colonna visibile */}
                {columns
                    .filter((col) => col.visible)
                    .map((col) =>
                        <Table.Cell key={crypto.randomUUID()}
                            textAlign={col.isNumeric ? "end" : "start"}
                        >
                            {row.data[col.field] == null ? "/" : row.data[col.field]}
                        </Table.Cell>
                    )}
            </Table.Row>
        ))}
    </Table.Body>
};

export default DynamicTable;
