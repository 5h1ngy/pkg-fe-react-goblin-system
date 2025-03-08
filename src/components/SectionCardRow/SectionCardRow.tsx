import { FC } from "react"
import { Flex, Spacer, Text } from "@chakra-ui/react";

import { ComponentTypes } from "./sectionCardRow.types";

const SectionCardRow: FC<ComponentTypes> = ({ field, value }) => {

    return field
        ? <Flex wrap={"wrap"} gapX={"5rem"} justifyContent={"space-between"}>
            <Text textStyle="lg"
                style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}
            >
                {field}
            </Text>
            <Spacer />
            <Text textStyle="lg"
                style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}
            >
                {value}
            </Text>
        </Flex>
        : <Text textStyle="lg"
            style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}
        >
            {value}
        </Text>
}

export default SectionCardRow;