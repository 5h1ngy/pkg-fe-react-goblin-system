import { DataList as ChakraDataList } from "@chakra-ui/react";
export declare const DataListRoot: import("react").ForwardRefExoticComponent<ChakraDataList.RootProps & import("react").RefAttributes<HTMLDListElement>>;
interface ItemProps extends ChakraDataList.ItemProps {
    label: React.ReactNode;
    value: React.ReactNode;
    info?: React.ReactNode;
    grow?: boolean;
}
export declare const DataListItem: import("react").ForwardRefExoticComponent<ItemProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
