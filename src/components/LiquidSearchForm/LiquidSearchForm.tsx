import { Box, Stack } from "@chakra-ui/react"
import { z, ZodObject } from 'zod';

import DynamicForm from '@/components/Factory/DynamicForm/DynamicForm';
import { Button } from "@/components/Factory/Chakra/button"
import { ComponentProps } from "./liquidSearchForm.types";


function LiquidSearchForm<T extends z.ZodEffects<ZodObject<any>>>({ schema, submit }: ComponentProps<T>) {

    return <DynamicForm
        schema={schema}
        width={"full"}
        rowsWidth={"fit-content"}
        render={(rows: React.ReactNode[], onSubmit: Function,) =>
            <Stack width={"full"} wrap={"wrap"} direction={'row'} alignItems={"center"} justifyContent={'space-between'}
                gap={"1rem"} padding={"1.5rem"} borderRadius={"10px"}
                backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.950", }}
            >
                <Box width={'fit-content'} height={'fit-content'}>
                    {rows}
                </Box>
                <Box width={'fit-content'} height={'fit-content'} alignItems={"end"}>
                    <Button onClick={onSubmit(submit)} variant="outline" type="submit" colorPalette={"teal"} width={"fit-content"} marginTop={'20px'}>
                        Search
                    </Button>
                </Box>
            </Stack>
        }
    />
}

export default LiquidSearchForm