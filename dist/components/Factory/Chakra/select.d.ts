import type { CollectionItem } from "@chakra-ui/react";
import { Select as ChakraSelect } from "@chakra-ui/react";
interface SelectTriggerProps extends ChakraSelect.ControlProps {
    clearable?: boolean;
}
export declare const SelectTrigger: import("react").ForwardRefExoticComponent<SelectTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
interface SelectContentProps extends ChakraSelect.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const SelectContent: import("react").ForwardRefExoticComponent<SelectContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SelectItem: import("react").ForwardRefExoticComponent<ChakraSelect.ItemProps & import("react").RefAttributes<HTMLDivElement>>;
interface SelectValueTextProps extends Omit<ChakraSelect.ValueTextProps, "children"> {
    children?(items: CollectionItem[]): React.ReactNode;
}
export declare const SelectValueText: import("react").ForwardRefExoticComponent<SelectValueTextProps & import("react").RefAttributes<HTMLSpanElement>>;
export declare const SelectRoot: ChakraSelect.RootComponent;
interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
    label: React.ReactNode;
}
export declare const SelectItemGroup: import("react").ForwardRefExoticComponent<SelectItemGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const SelectLabel: import("react").ForwardRefExoticComponent<ChakraSelect.LabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const SelectItemText: import("react").ForwardRefExoticComponent<ChakraSelect.ItemTextProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=select.d.ts.map