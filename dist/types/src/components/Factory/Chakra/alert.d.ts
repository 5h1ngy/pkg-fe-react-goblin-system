import { Alert as ChakraAlert } from "@chakra-ui/react";
export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    title?: React.ReactNode;
    icon?: React.ReactElement;
    closable?: boolean;
    onClose?: () => void;
}
export declare const Alert: import("react").ForwardRefExoticComponent<AlertProps & import("react").RefAttributes<HTMLDivElement>>;
