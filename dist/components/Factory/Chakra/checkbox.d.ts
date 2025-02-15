import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
export interface CheckboxProps extends ChakraCheckbox.RootProps {
    icon?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rootRef?: React.Ref<HTMLLabelElement>;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=checkbox.d.ts.map