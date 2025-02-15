import { Dialog as ChakraDialog } from "@chakra-ui/react";
interface DialogContentProps extends ChakraDialog.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    backdrop?: boolean;
}
export declare const DialogContent: import("react").ForwardRefExoticComponent<DialogContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogCloseTrigger: import("react").ForwardRefExoticComponent<ChakraDialog.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const DialogRoot: import("react").FC<ChakraDialog.RootProps>;
export declare const DialogFooter: import("react").ForwardRefExoticComponent<ChakraDialog.FooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogHeader: import("react").ForwardRefExoticComponent<ChakraDialog.HeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogBody: import("react").ForwardRefExoticComponent<ChakraDialog.BodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogBackdrop: import("react").ForwardRefExoticComponent<ChakraDialog.BackdropProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogTitle: import("react").ForwardRefExoticComponent<ChakraDialog.TitleProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogDescription: import("react").ForwardRefExoticComponent<ChakraDialog.DescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DialogTrigger: import("react").ForwardRefExoticComponent<ChakraDialog.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const DialogActionTrigger: import("react").ForwardRefExoticComponent<ChakraDialog.ActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=dialog.d.ts.map