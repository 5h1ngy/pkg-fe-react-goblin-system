import { Steps as ChakraSteps } from "@chakra-ui/react";
interface StepInfoProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
}
export interface StepsItemProps extends Omit<ChakraSteps.ItemProps, "title">, StepInfoProps {
    completedIcon?: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const StepsItem: (props: StepsItemProps) => import("react").JSX.Element;
interface StepsIndicatorProps {
    completedIcon: React.ReactNode;
    icon?: React.ReactNode;
}
export declare const StepsIndicator: (props: StepsIndicatorProps) => import("react").JSX.Element;
export declare const StepsList: import("react").ForwardRefExoticComponent<ChakraSteps.ListProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StepsRoot: import("react").ForwardRefExoticComponent<ChakraSteps.RootProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StepsContent: import("react").ForwardRefExoticComponent<ChakraSteps.ContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StepsCompletedContent: import("react").ForwardRefExoticComponent<ChakraSteps.CompletedContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const StepsNextTrigger: (props: ChakraSteps.NextTriggerProps) => import("react").JSX.Element;
export declare const StepsPrevTrigger: (props: ChakraSteps.PrevTriggerProps) => import("react").JSX.Element;
export {};
