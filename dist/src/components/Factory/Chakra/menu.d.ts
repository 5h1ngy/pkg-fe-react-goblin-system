import { Menu as ChakraMenu } from "@chakra-ui/react";
interface MenuContentProps extends ChakraMenu.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const MenuContent: import("react").ForwardRefExoticComponent<MenuContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuArrow: import("react").ForwardRefExoticComponent<ChakraMenu.ArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuCheckboxItem: import("react").ForwardRefExoticComponent<ChakraMenu.CheckboxItemProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuRadioItem: import("react").ForwardRefExoticComponent<ChakraMenu.RadioItemProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuItemGroup: import("react").ForwardRefExoticComponent<ChakraMenu.ItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface MenuTriggerItemProps extends ChakraMenu.ItemProps {
    startIcon?: React.ReactNode;
}
export declare const MenuTriggerItem: import("react").ForwardRefExoticComponent<MenuTriggerItemProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuRadioItemGroup: import("react").ForwardRefExoticComponent<ChakraMenu.RadioItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuContextTrigger: import("react").ForwardRefExoticComponent<ChakraMenu.ContextTriggerProps & import("react").RefAttributes<HTMLElement>>;
export declare const MenuRoot: import("react").FC<ChakraMenu.RootProps>;
export declare const MenuSeparator: import("react").ForwardRefExoticComponent<ChakraMenu.SeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuItem: import("react").ForwardRefExoticComponent<ChakraMenu.ItemProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuItemText: import("react").ForwardRefExoticComponent<ChakraMenu.ItemTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const MenuItemCommand: import("react").ForwardRefExoticComponent<ChakraMenu.CommandProps & import("react").RefAttributes<HTMLElement>>;
export declare const MenuTrigger: import("react").ForwardRefExoticComponent<ChakraMenu.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=menu.d.ts.map