import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
export interface TooltipProps extends ChakraTooltip.RootProps {
    showArrow?: boolean;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    content: React.ReactNode;
    contentProps?: ChakraTooltip.ContentProps;
    disabled?: boolean;
}
export declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<HTMLDivElement>>;
