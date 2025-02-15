import type { GroupProps, SlotRecipeProps } from "@chakra-ui/react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export interface AvatarProps extends ChakraAvatar.RootProps {
    name?: string;
    src?: string;
    srcSet?: string;
    loading?: ImageProps["loading"];
    icon?: React.ReactElement;
    fallback?: React.ReactNode;
}
export declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLDivElement>>;
interface AvatarGroupProps extends GroupProps, SlotRecipeProps<"avatar"> {
}
export declare const AvatarGroup: import("react").ForwardRefExoticComponent<AvatarGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=avatar.d.ts.map