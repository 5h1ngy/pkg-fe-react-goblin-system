import { RadioCard } from "@chakra-ui/react";
interface RadioCardItemProps extends RadioCard.ItemProps {
    icon?: React.ReactElement;
    label?: React.ReactNode;
    description?: React.ReactNode;
    addon?: React.ReactNode;
    indicator?: React.ReactNode | null;
    indicatorPlacement?: "start" | "end" | "inside";
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const RadioCardItem: import("react").ForwardRefExoticComponent<RadioCardItemProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const RadioCardRoot: import("react").ForwardRefExoticComponent<RadioCard.RootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const RadioCardLabel: import("react").ForwardRefExoticComponent<RadioCard.LabelProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const RadioCardItemIndicator: import("react").ForwardRefExoticComponent<RadioCard.ItemIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};
