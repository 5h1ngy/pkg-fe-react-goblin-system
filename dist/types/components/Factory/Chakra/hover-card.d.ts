import { HoverCard } from "@chakra-ui/react";
interface HoverCardContentProps extends HoverCard.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}
export declare const HoverCardContent: import("react").ForwardRefExoticComponent<HoverCardContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const HoverCardArrow: import("react").ForwardRefExoticComponent<HoverCard.ArrowProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const HoverCardRoot: import("react").FC<HoverCard.RootProps>;
export declare const HoverCardTrigger: import("react").ForwardRefExoticComponent<HoverCard.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
