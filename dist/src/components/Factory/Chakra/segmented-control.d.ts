import { SegmentGroup } from "@chakra-ui/react";
interface Item {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface SegmentedControlProps extends SegmentGroup.RootProps {
    items: Array<string | Item>;
}
export declare const SegmentedControl: import("react").ForwardRefExoticComponent<SegmentedControlProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
