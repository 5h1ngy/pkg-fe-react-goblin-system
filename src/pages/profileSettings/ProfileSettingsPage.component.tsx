import { useSubmit } from "react-router-dom";
import { Stack, Card, Wrap, WrapItem } from "@chakra-ui/react"

import { WithRouterProps } from "@/hocs/withRouter";
import { Bind } from "@/hocs/withContainer/withContainerProfileSlice";
import DynamicForm from '@/components/Factory/DynamicForm/DynamicFormFactory';
import { Button } from "@/components/Factory/Chakra/button";
import SectionCardComponent from "@/components/SectionCard/SectionCardComponent";
import { STATUS } from "@/components/SectionCard/sectionCardComponent.types";

import { schema as schemaAnagraphy } from "./profileSettingsPage.form.anagraphy";
import { defaultValues as defaultValuesAnagraphy } from "./profileSettingsPage.form.anagraphy";
import { FormInputs as FormInputsAnagraphy } from "./profileSettingsPage.form.anagraphy";

import { schema as schemaAccess } from "./profileSettingsPage.form.access";
import { defaultValues as defaultValuesAccess } from "./profileSettingsPage.form.access";
import { FormInputs as FormInputsAccess } from "./profileSettingsPage.form.access";
import { CiFolderOff } from "react-icons/ci";

const Component: React.FC<Bind & WithRouterProps> = () => {
    const submit = useSubmit();

    return <Wrap gap={"5rem"} justifyContent={"center"}>

        <WrapItem>
            <SectionCardComponent
                status={STATUS.SUCCESS}
                isEmpty={false}
                header={{
                    title: "Edit Anagraphy",
                }}
                body={{
                    disableStyle: true,
                    content: <>
                        <Card.Root flexDirection="column" borderRadius={"10px"} height={"fit-content"}>
                            <DynamicForm schema={schemaAnagraphy} defaultValues={defaultValuesAnagraphy}
                                render={(rows: React.ReactNode[], onSubmit: Function) => <>
                                    <Card.Body>
                                        <Stack gap="4" width={{ md: "fit-content" }} height={{ md: "fit-content" }}>
                                            {rows}
                                        </Stack>
                                    </Card.Body>
                                    <Card.Footer justifyContent="flex-end" paddingY="1rem" flexWrap={"wrap"}>
                                        <Button
                                            variant="solid"
                                            colorPalette={"cyan"}
                                            width={"40%"}
                                            onClick={onSubmit((fields: FormInputsAnagraphy) =>
                                                submit(fields, { method: 'PUT', action: '/dashboard/profile/settings' })
                                            )}
                                        >
                                            Modifica
                                        </Button>
                                    </Card.Footer>
                                </>}
                            />
                        </Card.Root>
                    </>
                }}
                empty={{
                    icon: <CiFolderOff />,
                    title: "No Data Found",
                    description: "no information present",
                }}
            />
        </WrapItem>

        <WrapItem>
            <SectionCardComponent
                status={STATUS.SUCCESS}
                isEmpty={false}
                header={{
                    title: "Edit Access",
                }}
                body={{
                    disableStyle: true,
                    content: <>
                        <Card.Root flexDirection="column" borderRadius={"10px"} height={"fit-content"}>
                            <DynamicForm schema={schemaAccess} defaultValues={defaultValuesAccess}
                                render={(rows: React.ReactNode[], onSubmit: Function) => <>
                                    <Card.Body>
                                        <Stack gap="4" width={{ md: "fit-content" }} height={{ md: "fit-content" }}>
                                            {rows}
                                        </Stack>
                                    </Card.Body>
                                    <Card.Footer justifyContent="flex-end" paddingY="1rem" flexWrap={"wrap"}>
                                        <Button
                                            variant="solid"
                                            colorPalette={"cyan"}
                                            width={"40%"}
                                            onClick={onSubmit((fields: FormInputsAccess) =>
                                                submit(fields, { method: 'PUT', action: '/dashboard/profile/settings' })
                                            )}
                                        >
                                            Modifica
                                        </Button>
                                    </Card.Footer>
                                </>}
                            />
                        </Card.Root>
                    </>
                }}
                empty={{
                    icon: <CiFolderOff />,
                    title: "No Data Found",
                    description: "no information present",
                }}
            />
        </WrapItem>

    </Wrap>
}

export default Component;