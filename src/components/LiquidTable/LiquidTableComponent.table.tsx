import { FC } from "react";
import { Stack } from "@chakra-ui/react"
import { Table } from "@chakra-ui/react"

import Header from "./LiquidTableComponent.header";
import Body from "./LiquidTableComponent.body";
import Pagination from "./LiquidTableComponent.pagination";
import ActionBar from "./LiquidTableComponent.actionBar";

const DynamicTable: FC = () => {

    return (
        <Stack width="full" gap="3" alignItems={"flex-end"}>

            <Pagination />

            <Table.ScrollArea borderWidth="1px" rounded="md" width="100%" height="100%">
                <Table.Root size="lg" stickyHeader interactive>
                    <Header />
                    <Body />
                </Table.Root>
            </Table.ScrollArea>

            <ActionBar />
        </Stack>
    );
};

export default DynamicTable;
