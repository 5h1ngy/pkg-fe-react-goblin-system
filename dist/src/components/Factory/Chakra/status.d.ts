import { Status as ChakraStatus } from "@chakra-ui/react";
type StatusValue = "success" | "error" | "warning" | "info";
export interface StatusProps extends ChakraStatus.RootProps {
    value?: StatusValue;
}
export declare const Status: import("react").ForwardRefExoticComponent<StatusProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=status.d.ts.map