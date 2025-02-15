import { EmptyState as ChakraEmptyState } from "@chakra-ui/react";
export interface EmptyStateProps extends ChakraEmptyState.RootProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}
export declare const EmptyState: import("react").ForwardRefExoticComponent<EmptyStateProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=empty-state.d.ts.map