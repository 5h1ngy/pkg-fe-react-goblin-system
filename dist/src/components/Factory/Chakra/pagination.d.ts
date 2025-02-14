import type { ButtonProps, TextProps } from "@chakra-ui/react";
import { Pagination as ChakraPagination } from "@chakra-ui/react";
type PaginationVariant = "outline" | "solid" | "subtle";
export interface PaginationRootProps extends Omit<ChakraPagination.RootProps, "type"> {
    size?: ButtonProps["size"];
    variant?: PaginationVariant;
    getHref?: (page: number) => string;
}
export declare const PaginationRoot: import("react").ForwardRefExoticComponent<PaginationRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PaginationEllipsis: import("react").ForwardRefExoticComponent<ChakraPagination.EllipsisProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const PaginationItem: import("react").ForwardRefExoticComponent<ChakraPagination.ItemProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PaginationPrevTrigger: import("react").ForwardRefExoticComponent<ChakraPagination.PrevTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PaginationNextTrigger: import("react").ForwardRefExoticComponent<ChakraPagination.NextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PaginationItems: (props: React.HTMLAttributes<HTMLElement>) => import("react/jsx-runtime").JSX.Element;
interface PageTextProps extends TextProps {
    format?: "short" | "compact" | "long";
}
export declare const PaginationPageText: import("react").ForwardRefExoticComponent<PageTextProps & import("react").RefAttributes<HTMLParagraphElement>>;
export {};
