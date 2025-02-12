import { FC, useState } from "react";
import { Card, HStack, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Heading, Stack } from "@chakra-ui/react"

import DynamicForm from '@/components/Factory/DynamicForm/DynamicForm';
import { Button } from "@/components/Factory/Chakra/button"

import { schema } from "./RegisterComponent.form"
import { ComponentProps } from "./registerComponent.types";

const Component: FC<ComponentProps> = ({ rootStyle, children, submit }) => {
    const [step, setStep] = useState(0)
    const [stepComplete, setStepComplete] = useState(false)

    async function next(step: number, stepComplete: boolean) {
        setStep(step)
        setStepComplete(stepComplete)
    }

    async function back(step: number, stepComplete: boolean) {
        setStep(step)
        setStepComplete(stepComplete)
    }

    return <Card.Root flexDirection="row" borderRadius={"10px"} {...rootStyle}>
        <HStack gap={"1rem"} padding={"2rem"} justifyContent={"center"}>

            <Image borderRadius={"10px"}
                display={{ base: "none", lg: "block" }}
                objectFit="cover"
                height="15rem"
                src={`${import.meta.env.VITE_BASENAME}/assets/background_card_register.png`}
                alt=""
            />

            <VStack>

                <VStack>
                    <Heading textStyle="4xl">Registrazione</Heading>
                    {children}
                </VStack>

                <DynamicForm schema={schema} step={step} onNext={next} onBack={back}
                    render={(rows: React.ReactNode[], onSubmit: Function, onNext?: Function, onBack?: Function,) => <>
                        <Card.Body>
                            <Stack gap="4" width={{ md: "fit-content" }}>
                                {rows}
                            </Stack>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end" paddingY="1rem" flexWrap={"wrap"}>
                            {step !== 0 && <Button onClick={() => onBack!()} variant="outline" colorPalette={"cyan"} width={"40%"}>Indietro</Button>}
                            {!stepComplete
                                ? <Button onClick={() => onNext!()} variant="subtle" colorPalette={"cyan"} width={"40%"}>Avanti</Button>
                                : <Button onClick={onSubmit(submit)} variant="solid" colorPalette={"cyan"} width={"40%"}>Crea Account</Button>
                            }
                        </Card.Footer>
                    </>}
                />
            </VStack>
        </HStack>
    </Card.Root>
}

export default Component