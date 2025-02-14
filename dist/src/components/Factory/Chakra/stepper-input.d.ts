import { NumberInput } from "@chakra-ui/react";
export interface StepperInputProps extends NumberInput.RootProps {
    label?: React.ReactNode;
}
export declare const StepperInput: import("react").ForwardRefExoticComponent<StepperInputProps & import("react").RefAttributes<HTMLDivElement>>;
