import { Blockquote as ChakraBlockquote } from "@chakra-ui/react";
export interface BlockquoteProps extends ChakraBlockquote.RootProps {
    cite?: React.ReactNode;
    citeUrl?: string;
    icon?: React.ReactNode;
    showDash?: boolean;
}
export declare const Blockquote: import("react").ForwardRefExoticComponent<BlockquoteProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const BlockquoteIcon: import("react").ForwardRefExoticComponent<ChakraBlockquote.BlockquoteIconProps & import("react").RefAttributes<SVGElement>>;
//# sourceMappingURL=blockquote.d.ts.map