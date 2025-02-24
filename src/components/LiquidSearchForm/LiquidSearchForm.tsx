import { Stack, VStack } from "@chakra-ui/react"
import { z, ZodObject } from 'zod';

import DynamicForm from '@/components/Factory/DynamicForm/DynamicForm';
import { Button } from "@/components/Factory/Chakra/button"
import { ComponentProps } from "./liquidSearchForm.types";


function LiquidSearchForm<T extends z.ZodEffects<ZodObject<any>>>({ schema }: ComponentProps<T>) {

    return <DynamicForm
        schema={schema}
        width={"full"}
        render={(fields: React.ReactNode[]) =>
            <VStack width={"fit-content"} >
                <Stack width={"fit-content"} wrap={"wrap"}
                    gap={"1rem"} padding={"1.5rem"} borderRadius={"10px"}
                    backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.950", }}
                >
                    {fields}
                </Stack>
                <VStack width={"100%"} alignItems={"flex-end"}>
                    <Button variant="outline" type="submit" colorPalette={"teal"}>
                        Crea Account
                    </Button>
                </VStack>
            </VStack>
        }
    />
}

export default LiquidSearchForm