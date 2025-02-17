import { FlexProps } from "@chakra-ui/react";
export declare enum STATUS {
    IDLE = 0,
    LOADING = 1,
    SUCCESS = 2,
    FAILED = 3
}
export type ComponentTypes = {
    status: STATUS;
    isEmpty: boolean;
    header?: {
        avatar?: string;
        title?: string;
    };
    subHeader?: {
        content?: React.ReactNode;
    };
    body: {
        content: React.ReactNode;
        style?: FlexProps & React.RefAttributes<HTMLDivElement>;
        disableStyle?: boolean;
    };
    empty?: {
        icon?: React.ReactNode;
        title?: string;
        description?: string;
    };
};
