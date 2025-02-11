import { FC, useState } from "react";

import { parseItems } from "./liquidTableComponent.utils";
import { Context } from "./liquidTableComponent.shared.providers";
import { ComponentProps } from "./liquidTableComponent.types";
import Component from "./LiquidTableComponent.table";

const provider: FC<ComponentProps> = (props) => {
    const { columns, rows } = parseItems(props.items, props.hiddenFields);
    const [selection, setSelection] = useState<string[]>([]);

    return <Context.Provider value={{
        columns, rows,
        pagination: props.pagination,
        select: { selection, setSelection }
    }}>
        <Component />
    </Context.Provider>
}

export default provider