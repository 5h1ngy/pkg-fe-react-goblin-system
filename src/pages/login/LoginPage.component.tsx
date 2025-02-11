import { useEffect } from "react";
import { useSubmit } from "react-router";
import { HStack, Separator, Stack } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { FaGoogle } from "react-icons/fa";

import { WithRouterProps } from "@/hocs/withRouter";
import { Bind } from "@/hocs/withContainer/withContainerAuthSlice"

import { Button } from "@/components/Factory/Chakra/button"
import { toaster } from "@/components/Factory/Chakra/toaster";

import Login from "@/components/Login/LoginComponent"
import { FormInputs } from "@/components/Login/LoginComponent.form"

const Component: React.FC<Bind & WithRouterProps> = ({ router, actions, state }) => {
    const submit = useSubmit();

    useEffect(() => {
        if (state.login.error) {
            toaster.create({
                title: state.login.error!.status,
                description: state.login.error!.message,
                type: "error",
                onStatusChange: (details) => {
                    if (details.status === "dismissing") {
                        actions.clearErrorsLogin();
                    }
                },
            })
        }
    }, [state.login.error])

    const Header: React.FC = () => <Text>
        <Link colorPalette="cyan" onClick={() => router.navigate("/auth/register")}>
            Create account
        </Link>
    </Text>

    const Body: React.FC = () => <Stack width={"full"} alignItems={"center"} gap="4">

        <HStack width={"full"}>
            <Separator flex="1" />
            <Text flexShrink="0">Oppure</Text>
            <Separator flex="1" />
        </HStack>

        <Button colorPalette="cyan" variant="solid" width={{ sm: "15rem" }}>
            <FaGoogle /> Google
        </Button>

    </Stack>

    return <Login
        root={{ width: "fit-content", height: "fit-content" }}
        header={<Header />}
        submit={(fields: FormInputs) => submit(fields, { method: 'POST', action: '/auth/login' })}
    >
        <Body />
    </Login >
}

export default Component;