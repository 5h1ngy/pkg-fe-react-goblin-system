import { Drawer as ChakraDrawer } from "@chakra-ui/react";
interface DrawerContentProps extends ChakraDrawer.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    offset?: ChakraDrawer.ContentProps["padding"];
}
export declare const DrawerContent: import("react").ForwardRefExoticComponent<DrawerContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerCloseTrigger: import("react").ForwardRefExoticComponent<ChakraDrawer.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const DrawerTrigger: import("react").ForwardRefExoticComponent<ChakraDrawer.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const DrawerRoot: import("react").FC<ChakraDrawer.RootProps>;
export declare const DrawerFooter: import("react").ForwardRefExoticComponent<ChakraDrawer.FooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerHeader: import("react").ForwardRefExoticComponent<ChakraDrawer.HeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerBody: import("react").ForwardRefExoticComponent<ChakraDrawer.BodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerBackdrop: import("react").ForwardRefExoticComponent<ChakraDrawer.BackdropProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerDescription: import("react").ForwardRefExoticComponent<ChakraDrawer.DescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerTitle: import("react").ForwardRefExoticComponent<ChakraDrawer.TitleProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DrawerActionTrigger: import("react").ForwardRefExoticComponent<ChakraDrawer.ActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=drawer.d.ts.map