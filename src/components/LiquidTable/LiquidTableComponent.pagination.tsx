import { FC } from "react";
import { HStack } from "@chakra-ui/react"

import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot, } from "@/components/Factory/Chakra/pagination"

import { useTableContext } from "./liquidTableComponent.shared.providers";

const DynamicTable: FC = () => {
    const { pagination } = useTableContext();

    return pagination && <PaginationRoot
        padding={"0.3rem"}
        count={pagination.totalPages}
        width={"fit-content"}
        pageSize={pagination.size}
        page={pagination.offset}
        borderRadius={"10px"}
        backgroundColor="gray.100"
        _dark={{ backgroundColor: "gray.950" }}
    >
        <HStack wrap="wrap">
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
        </HStack>
    </PaginationRoot>
};

export default DynamicTable;
