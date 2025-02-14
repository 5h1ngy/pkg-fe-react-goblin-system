import type { ButtonProps } from "@chakra-ui/react";
import { Toggle as ChakraToggle } from "@chakra-ui/react";
interface ToggleProps extends ChakraToggle.RootProps {
    variant?: keyof typeof variantMap;
    size?: ButtonProps["size"];
}
declare const variantMap: {
    readonly solid: {
        readonly on: "solid";
        readonly off: "outline";
    };
    readonly surface: {
        readonly on: "surface";
        readonly off: "outline";
    };
    readonly subtle: {
        readonly on: "subtle";
        readonly off: "ghost";
    };
    readonly ghost: {
        readonly on: "subtle";
        readonly off: "ghost";
    };
};
export declare const Toggle: import("react").ForwardRefExoticComponent<ToggleProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ToggleIndicator: import("react").ForwardRefExoticComponent<ChakraToggle.IndicatorProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
