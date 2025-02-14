import { Accordion } from "@chakra-ui/react";
interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
    indicatorPlacement?: "start" | "end";
}
export declare const AccordionItemTrigger: import("react").ForwardRefExoticComponent<AccordionItemTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
interface AccordionItemContentProps extends Accordion.ItemContentProps {
}
export declare const AccordionItemContent: import("react").ForwardRefExoticComponent<AccordionItemContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AccordionRoot: import("react").ForwardRefExoticComponent<Accordion.RootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const AccordionItem: import("react").ForwardRefExoticComponent<Accordion.ItemProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
