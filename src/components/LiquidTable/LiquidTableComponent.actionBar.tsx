import { FC, useEffect } from "react";
import { Kbd } from "@chakra-ui/react"

import { Button } from "@/components/Factory/Chakra/button";
import { ActionBarContent, ActionBarRoot, ActionBarSelectionTrigger, ActionBarSeparator, } from "@/components/Factory/Chakra/action-bar";

import { useTableContext } from "./liquidTableComponent.shared.providers";

const DynamicTable: FC = () => {
    const { select } = useTableContext();
    const hasSelection = select.selection.length > 0;

    useEffect(() => {
        const elements = document.getElementsByClassName("chakra-action-bar__positioner");
        for (let i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.zIndex = "9999";
        }
    }, []);

    return <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
            <ActionBarSelectionTrigger>
                {select.selection.length} selected
            </ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm">
                Delete <Kbd>⌫</Kbd>
            </Button>
            <Button variant="outline" size="sm">
                Share <Kbd>T</Kbd>
            </Button>
        </ActionBarContent>
    </ActionBarRoot>
};

export default DynamicTable;
