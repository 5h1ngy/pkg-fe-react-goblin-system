import { type BadgeProps, Stat as ChakraStat } from "@chakra-ui/react";
interface StatLabelProps extends ChakraStat.LabelProps {
    info?: React.ReactNode;
}
export declare const StatLabel: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLDivElement>>;
interface StatValueTextProps extends ChakraStat.ValueTextProps {
    value?: number;
    formatOptions?: Intl.NumberFormatOptions;
}
export declare const StatValueText: import("react").ForwardRefExoticComponent<StatValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StatUpTrend: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StatDownTrend: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StatRoot: import("react").ForwardRefExoticComponent<ChakraStat.RootProps & import("react").RefAttributes<HTMLDListElement>>;
export declare const StatHelpText: import("react").ForwardRefExoticComponent<ChakraStat.HelpTextProps & import("react").RefAttributes<HTMLElement>>;
export declare const StatValueUnit: import("react").ForwardRefExoticComponent<ChakraStat.ValueUnitProps & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=stat.d.ts.map