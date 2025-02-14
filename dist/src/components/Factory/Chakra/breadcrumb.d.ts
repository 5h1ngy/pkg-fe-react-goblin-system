import { Breadcrumb, type SystemStyleObject } from "@chakra-ui/react";
export interface BreadcrumbRootProps extends Breadcrumb.RootProps {
    separator?: React.ReactNode;
    separatorGap?: SystemStyleObject["gap"];
}
export declare const BreadcrumbRoot: import("react").ForwardRefExoticComponent<BreadcrumbRootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const BreadcrumbLink: import("react").ForwardRefExoticComponent<Breadcrumb.LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export declare const BreadcrumbCurrentLink: import("react").ForwardRefExoticComponent<Breadcrumb.CurrentLinkProps & import("react").RefAttributes<HTMLElement>>;
export declare const BreadcrumbEllipsis: import("react").ForwardRefExoticComponent<Breadcrumb.EllipsisProps & import("react").RefAttributes<HTMLElement>>;
