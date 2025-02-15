import { PinInput as ChakraPinInput } from "@chakra-ui/react";
export interface PinInputProps extends ChakraPinInput.RootProps {
    rootRef?: React.Ref<HTMLDivElement>;
    count?: number;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    attached?: boolean;
}
export declare const PinInput: import("react").ForwardRefExoticComponent<PinInputProps & import("react").RefAttributes<HTMLInputElement>>;
