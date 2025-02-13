import { FlexProps } from "@chakra-ui/react";

export type ComponentTypes = {
    status: STATUS;
    isEmpty: boolean;
    header?: {
        avatar?: string;
        title?: string;
    },
    subHeader?: {
        content?: React.ReactNode
    },
    body: {
        content: React.ReactNode;
        style?: FlexProps & React.RefAttributes<HTMLDivElement>;
        disableStyle?: boolean;
    },
    empty?: {
        icon?: React.ReactNode;
        title?: string;
        description?: string;
    },
}