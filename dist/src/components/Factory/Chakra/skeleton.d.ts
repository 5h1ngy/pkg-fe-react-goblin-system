import type { SkeletonProps as ChakraSkeletonProps, CircleProps } from "@chakra-ui/react";
export interface SkeletonCircleProps extends ChakraSkeletonProps {
    size?: CircleProps["size"];
}
export declare const SkeletonCircle: (props: SkeletonCircleProps) => import("react/jsx-runtime").JSX.Element;
export interface SkeletonTextProps extends ChakraSkeletonProps {
    noOfLines?: number;
}
export declare const SkeletonText: import("react").ForwardRefExoticComponent<SkeletonTextProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const Skeleton: import("react").ForwardRefExoticComponent<ChakraSkeletonProps & import("react").RefAttributes<HTMLDivElement>>;
