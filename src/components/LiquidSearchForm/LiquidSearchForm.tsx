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
            <VStack>
                <Stack width={"full"} wrap={"wrap"}
                    gap={"1rem"} padding={"1.5rem"} borderRadius={"10px"}
                    backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.950", }}
                >
                    {fields}
                    <Stack width={"fit-content"} alignItems={"flex-end"}>
                        <Button variant="outline" type="submit" colorPalette={"teal"}>
                            Crea Account
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        }
    />
}

export default LiquidSearchForm