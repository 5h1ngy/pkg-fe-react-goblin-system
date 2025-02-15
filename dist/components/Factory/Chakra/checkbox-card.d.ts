import { CheckboxCard as ChakraCheckboxCard } from "@chakra-ui/react";
export interface CheckboxCardProps extends ChakraCheckboxCard.RootProps {
    icon?: React.ReactElement;
    label?: React.ReactNode;
    description?: React.ReactNode;
    addon?: React.ReactNode;
    indicator?: React.ReactNode | null;
    indicatorPlacement?: "start" | "end" | "inside";
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const CheckboxCard: import("react").ForwardRefExoticComponent<CheckboxCardProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const CheckboxCardIndicator: import("react").ForwardRefExoticComponent<ChakraCheckboxCard.IndicatorProps & import("react").RefAttributes<SVGSVGElement>>;
