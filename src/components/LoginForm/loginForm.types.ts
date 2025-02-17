import { Card } from "@chakra-ui/react"

export interface ComponentProps {
    root?: Card.RootProps & React.RefAttributes<HTMLDivElement>,
    header?: React.ReactNode
    submit: Function,
    children?: React.ReactNode
}