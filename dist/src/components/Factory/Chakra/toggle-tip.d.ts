import { Popover as ChakraPopover } from "@chakra-ui/react";
export interface ToggleTipProps extends ChakraPopover.RootProps {
    showArrow?: boolean;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    content?: React.ReactNode;
}
export declare const ToggleTip: import("react").ForwardRefExoticComponent<ToggleTipProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const InfoTip: (props: Partial<ToggleTipProps>) => import("react/jsx-runtime").JSX.Element;
