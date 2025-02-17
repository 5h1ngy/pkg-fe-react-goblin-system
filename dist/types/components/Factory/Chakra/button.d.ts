import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
interface ButtonLoadingProps {
    loading?: boolean;
    loadingText?: React.ReactNode;
}
export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
