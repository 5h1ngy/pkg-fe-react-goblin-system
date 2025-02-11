import { useEffect } from "react";
import { Link, Text } from "@chakra-ui/react";
import { useSubmit } from 'react-router-dom';

import { WithRouterProps } from "@/hocs/withRouter";
import { toaster } from "@/components/Factory/Chakra/toaster"
import Register from "@/components/Register/RegisterComponent";
import { FormInputs } from "@/components/Register/RegisterComponent.form";
import { Bind } from "@/hocs/withContainer/withContainerAuthSlice";

const Component: React.FC<Bind & WithRouterProps> = ({ router, actions, state, }) => {
    const submit = useSubmit();

    useEffect(() => {
        if (state.register.error) {
            toaster.create({
                title: state.register.error!.status,
                description: state.register.error!.message,
                type: "error",
                onStatusChange: (details) => {
                    if (details.status === "dismissing") {
                        actions.clearErrorsRegister();
                    }
                },
            })
        }
    }, [state.register.error])

    return <Register
        rootStyle={{ width: "fit-content", height: "fit-content" }}
        submit={(fields: FormInputs) => submit(fields, { method: 'POST', action: '/auth/register' })}
    >

        <Text>
            <Link colorPalette="cyan" onClick={() => router.navigate("/auth/login")}>
                Torna alla login
            </Link>
        </Text>

    </Register>
}

export default Component;