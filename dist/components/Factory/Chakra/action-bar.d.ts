import { ActionBar } from "@chakra-ui/react";
interface ActionBarContentProps extends ActionBar.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const ActionBarContent: import("react").ForwardRefExoticComponent<ActionBarContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ActionBarCloseTrigger: import("react").ForwardRefExoticComponent<ActionBar.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ActionBarRoot: import("react").FC<ActionBar.RootProps>;
export declare const ActionBarSelectionTrigger: import("react").ForwardRefExoticComponent<ActionBar.SelectionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ActionBarSeparator: import("react").ForwardRefExoticComponent<ActionBar.SeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
