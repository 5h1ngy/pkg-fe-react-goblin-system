import type { BoxProps, InputElementProps } from "@chakra-ui/react";
export interface InputGroupProps extends BoxProps {
    startElementProps?: InputElementProps;
    endElementProps?: InputElementProps;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    children: React.ReactElement;
}
export declare const InputGroup: import("react").ForwardRefExoticComponent<InputGroupProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=input-group.d.ts.map