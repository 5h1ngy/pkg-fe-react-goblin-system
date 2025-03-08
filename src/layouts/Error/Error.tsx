import { FC } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { EmptyState } from "@/components/Factory/Chakra/empty-state";
import { BiError } from "react-icons/bi";

const Error: FC = () =>
    <Flex
        position={"fixed"}
        flexDirection="column"
        justifyContent="center"
        width="100%"
        height="100vh"
    >
        <EmptyState
            icon={<Icon as={BiError} boxSize={6} />}
            title="ERROR"
            description="An error occurred while running the application"
        />
    </Flex>

export default Error;