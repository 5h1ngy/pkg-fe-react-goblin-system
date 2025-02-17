import { Field as ChakraField } from "@chakra-ui/react";
export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorText?: React.ReactNode;
    optionalText?: React.ReactNode;
}
export declare const Field: import("react").ForwardRefExoticComponent<FieldProps & import("react").RefAttributes<HTMLDivElement>>;
