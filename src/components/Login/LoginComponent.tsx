import { FC } from "react";
import { Card, HStack, Stack, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"

import DynamicForm from '@/components/Factory/DynamicForm/DynamicForm';
import { Button } from "@/components/Factory/Chakra/button"

import { schema } from "./LoginComponent.form"

interface Props {
    root?: Card.RootProps & React.RefAttributes<HTMLDivElement>,
    header?: React.ReactNode
    submit: Function,
    children?: React.ReactNode
}

const Component: FC<Props> = ({ header, submit, children, root }) => {

    return <Card.Root borderRadius={"10px"} {...root}>
        <HStack gap={"1rem"} padding={"2rem"} justifyContent={"center"}>

            <Image borderRadius={"10px"}
                display={{ base: "none", lg: "block" }}
                objectFit="cover"
                height="15rem"
                src={`${import.meta.env.VITE_BASENAME}/assets/background_card_login.png`}
                alt=""
            />

            <VStack>

                <VStack>
                    <Heading textStyle="4xl">Login</Heading>
                    {header}
                </VStack>

                <DynamicForm
                    schema={schema}
                    render={(
                        rows: React.ReactNode[],
                        onSubmit: Function,
                    ) => <>
                            <Card.Body>
                                <Stack gap="4" width={{ md: "fit-content" }}>
                                    {rows}
                                </Stack>
                            </Card.Body>

                            <Card.Footer justifyContent="center" paddingY="1rem">
                                <Button onClick={onSubmit(submit)} variant="solid" width={"100%"}>Accedi</Button>
                            </Card.Footer>

                            {children}
                        </>
                    }
                />
            </VStack>
        </HStack>
    </Card.Root>
}

export default Component