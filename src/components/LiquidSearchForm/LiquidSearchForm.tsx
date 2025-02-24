import { Stack } from "@chakra-ui/react"
import { z, ZodObject } from 'zod';

import DynamicForm from '@/components/Factory/DynamicForm/DynamicForm';
import { Button } from "@/components/Factory/Chakra/button"
import { ComponentProps } from "./liquidSearchForm.types";


function LiquidSearchForm<T extends z.ZodEffects<ZodObject<any>>>({ schema }: ComponentProps<T>) {

    return <DynamicForm
        schema={schema}
        width={"full"}
        rowsWidth={"fit-content"}
        render={(fields: React.ReactNode[]) =>
            <Stack width={"full"} wrap={"wrap"} direction={'row'}
                gap={"1rem"} padding={"1.5rem"} borderRadius={"10px"}
                backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.950", }}
            >
                {fields}
                <Button variant="outline" type="submit" colorPalette={"teal"} width={"fit-content"}>
                    Crea Account
                </Button>
            </Stack>
        }
    />
}

export default LiquidSearchForm