import { Text, Tag, Stack, HStack } from "@chakra-ui/react"
import type { ColorPalette } from "@chakra-ui/react"
import { CiFolderOff } from "react-icons/ci";

import { WithRouterProps } from "@/hocs/withRouter";
import { Bind } from "@/hocs/withContainer/withContainerProfileSlice";
import SectionCardRow from "@/components/SectionCardRow/SectionCardRowComponent";
import SectionCardComponent from "@/components/SectionCard/SectionCardComponent";

function getRandomValue(arr: string[]): string {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export const colorPalettes: ColorPalette[] = [
    "gray", "red", "green", "blue",
    "teal", "pink", "purple", "cyan",
    "orange", "yellow",
]

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { status, occurrence } = state.overview;

    return <SectionCardComponent
        status={status}
        isEmpty={occurrence === undefined}
        header={{
            avatar: `${occurrence?.first_name} ${occurrence?.last_name}`,
            title: "User Details",
        }}
        subHeader={{
            content: <HStack gapX={"1rem"}>

                <HStack>
                    <Stack key={getRandomValue(colorPalettes)} align="center" direction="row">
                        <Tag.Root size="lg" colorPalette={getRandomValue(colorPalettes)}>
                            <Tag.Label>Username</Tag.Label>
                        </Tag.Root>
                    </Stack>
                    <Text textStyle="lg" style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}>
                        {occurrence?.username}
                    </Text>
                </HStack>

                <HStack>
                    <Stack key={getRandomValue(colorPalettes)} align="center" direction="row">
                        <Tag.Root size="lg" colorPalette={getRandomValue(colorPalettes)}>
                            <Tag.Label>Email</Tag.Label>
                        </Tag.Root>
                    </Stack>
                    <Text textStyle="lg" style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}>
                        {occurrence?.email}
                    </Text>
                </HStack>

            </HStack>
        }}
        body={{
            content: <>
                <SectionCardRow field={"Name"} value={occurrence?.first_name} />
                <SectionCardRow field={"Surname"} value={occurrence?.last_name} />
                <SectionCardRow field={"Birthday"} value={occurrence?.bday} />
                <SectionCardRow field={"Age"} value={occurrence?.age} />
                <SectionCardRow field={"Gender"} value={occurrence?.gender} />
            </>
        }}
        empty={{
            icon: <CiFolderOff />,
            title: "No Data Found",
            description: "no information present",
        }}
    />
}

export default Component;