import { Popover as ChakraPopover } from "@chakra-ui/react";
interface PopoverContentProps extends ChakraPopover.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const PopoverContent: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverArrow: import("react").ForwardRefExoticComponent<ChakraPopover.ArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverCloseTrigger: import("react").ForwardRefExoticComponent<ChakraPopover.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PopoverTitle: import("react").ForwardRefExoticComponent<ChakraPopover.TitleProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverDescription: import("react").ForwardRefExoticComponent<ChakraPopover.DescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverFooter: import("react").ForwardRefExoticComponent<ChakraPopover.FooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverHeader: import("react").ForwardRefExoticComponent<ChakraPopover.HeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverRoot: import("react").FC<ChakraPopover.RootProps>;
export declare const PopoverBody: import("react").ForwardRefExoticComponent<ChakraPopover.BodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PopoverTrigger: import("react").ForwardRefExoticComponent<ChakraPopover.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=popover.d.ts.map