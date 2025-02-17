import type { ButtonProps, RecipeProps } from "@chakra-ui/react";
import { FileUpload as ChakraFileUpload } from "@chakra-ui/react";
export interface FileUploadRootProps extends ChakraFileUpload.RootProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
export declare const FileUploadRoot: import("react").ForwardRefExoticComponent<FileUploadRootProps & import("react").RefAttributes<HTMLInputElement>>;
export interface FileUploadDropzoneProps extends ChakraFileUpload.DropzoneProps {
    label: React.ReactNode;
    description?: React.ReactNode;
}
export declare const FileUploadDropzone: import("react").ForwardRefExoticComponent<FileUploadDropzoneProps & import("react").RefAttributes<HTMLInputElement>>;
interface VisibilityProps {
    showSize?: boolean;
    clearable?: boolean;
}
interface FileUploadListProps extends VisibilityProps, ChakraFileUpload.ItemGroupProps {
    files?: File[];
}
export declare const FileUploadList: import("react").ForwardRefExoticComponent<FileUploadListProps & import("react").RefAttributes<HTMLUListElement>>;
type Assign<T, U> = Omit<T, keyof U> & U;
interface FileInputProps extends Assign<ButtonProps, RecipeProps<"input">> {
    placeholder?: React.ReactNode;
}
export declare const FileInput: import("react").ForwardRefExoticComponent<FileInputProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const FileUploadLabel: import("react").ForwardRefExoticComponent<ChakraFileUpload.LabelProps & import("react").RefAttributes<HTMLLabelElement>>;
export declare const FileUploadClearTrigger: import("react").ForwardRefExoticComponent<import("@chakra-ui/react").FileUploadClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const FileUploadTrigger: import("react").ForwardRefExoticComponent<ChakraFileUpload.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
