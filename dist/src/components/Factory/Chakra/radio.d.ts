import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
export interface RadioProps extends ChakraRadioGroup.ItemProps {
    rootRef?: React.Ref<HTMLDivElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const RadioGroup: import("react").ForwardRefExoticComponent<ChakraRadioGroup.RootProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=radio.d.ts.map