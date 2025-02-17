import { RatingGroup } from "@chakra-ui/react";
export interface RatingProps extends RatingGroup.RootProps {
    icon?: React.ReactElement;
    count?: number;
    label?: React.ReactNode;
}
export declare const Rating: import("react").ForwardRefExoticComponent<RatingProps & import("react").RefAttributes<HTMLDivElement>>;
