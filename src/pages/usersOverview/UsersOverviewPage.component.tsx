import { VStack, Heading, Spacer } from "@chakra-ui/react"
import { z } from 'zod';

import { WithRouterProps } from "@/hocs/withRouter";
import { withMeta } from '@/components/Factory/DynamicForm/dynamicFormFactory.types';
import LiquidTable from "@/components/LiquidTable/LiquidTableComponent";
import { Item } from "@/components/LiquidTable/liquidTableComponent.types";
import SearchForm from "@/components/LiquidSearchForm/LiquidSearchFormComponent";
import { Bind } from "@/hocs/withContainer/withContainerUsersSlice";
import SectionCardComponent from "@/components/SectionCard/SectionCardComponent";
import { CiFolderOff } from "react-icons/ci";

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { status, occurrences, pagination, error } = state

    const schema = z.object({
        firstName: withMeta(
            z.string().min(2, { message: 'Il nome deve contenere almeno 2 caratteri' }),
            { label: 'Nome', row: 'row-1', style: { minWidth: "5rem", maxWidth: "15rem" } }
        ),
        lastName: withMeta(
            z.string().min(2, { message: 'Il cognome deve contenere almeno 2 caratteri' }),
            { label: 'Cognome', row: 'row-1', }
        ),
        birthday: withMeta(
            z.string().min(2, { message: 'La data di nascita deve contenere almeno 2 caratteri' }),
            { label: 'Data di Nascita', row: 'row-2', }
        ),
        email: withMeta(
            z.string().email({ message: 'Inserisci un email valido' }),
            { label: 'Email', row: 'row-2', }
        ),
    }).superRefine(() => { });

    // return <VStack width={"100%"} alignItems={"start"} gapY={'2rem'}>

    //     <Heading size="4xl">Users</Heading>
    //     <SearchForm schema={schema} />
    //     <Spacer />
    //     <LiquidTable items={state.users as Item[]} hiddenFields={['id']} pagination={state.pagination} />

    // </VStack>

    return <SectionCardComponent
        status={status}
        isEmpty={occurrences === undefined}
        // header={{
        //     avatar: `${occurrence?.first_name} ${occurrence?.last_name}`,
        //     title: "User Details",
        // }}
        // subHeader={{
        //     content: <HStack gapX={"1rem"}>

        //         <HStack>
        //             <Stack key={getRandomValue(colorPalettes)} align="center" direction="row">
        //                 <Tag.Root size="lg" colorPalette={getRandomValue(colorPalettes)}>
        //                     <Tag.Label>Username</Tag.Label>
        //                 </Tag.Root>
        //             </Stack>
        //             <Text textStyle="lg" style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}>
        //                 {occurrence?.username}
        //             </Text>
        //         </HStack>

        //         <HStack>
        //             <Stack key={getRandomValue(colorPalettes)} align="center" direction="row">
        //                 <Tag.Root size="lg" colorPalette={getRandomValue(colorPalettes)}>
        //                     <Tag.Label>Email</Tag.Label>
        //                 </Tag.Root>
        //             </Stack>
        //             <Text textStyle="lg" style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", }}>
        //                 {occurrence?.email}
        //             </Text>
        //         </HStack>

        //     </HStack>
        // }}
        body={{
            disableStyle: true,
            content: <VStack width={"100%"} alignItems={"start"} gapY={'2rem'}>
                <SearchForm schema={schema} />
                <Spacer />
                <LiquidTable items={occurrences as Item[]} hiddenFields={['id']} pagination={pagination} />
                {/* 
                    <SectionCardRow field={"Name"} value={occurrence?.first_name} />
                    <SectionCardRow field={"Surname"} value={occurrence?.last_name} />
                    <SectionCardRow field={"Birthday"} value={occurrence?.bday} />
                    <SectionCardRow field={"Age"} value={occurrence?.age} />
                    <SectionCardRow field={"Gender"} value={occurrence?.gender} /> 
                */}
            </VStack>
        }}
        empty={{
            icon: <CiFolderOff />,
            title: "No Data Found",
            description: "no information present",
        }}
    />
}

export default Component;