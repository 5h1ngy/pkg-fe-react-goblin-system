import { FC } from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { EmptyState } from "@/components/Factory/Chakra/empty-state";
import { ProgressBar, ProgressRoot } from "@/components/Factory/Chakra/progress";
import { TbLoader3 } from "react-icons/tb";

const Component: FC = () =>
    <Flex
        position={"fixed"}
        flexDirection="column"
        justifyContent="center"
        width="100%"
        height="100vh"
    >
        <EmptyState
            icon={<Icon as={TbLoader3} boxSize={6} />}
            title="Fetching..."
            description="Wait please!"
        >
            <ProgressRoot width="25vw" value={null}>
                <ProgressBar />
            </ProgressRoot>
        </EmptyState>
    </Flex>

export default Component;
