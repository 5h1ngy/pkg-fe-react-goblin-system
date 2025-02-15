import type { ConditionalValue, IconButtonProps } from "@chakra-ui/react";
import type { ThemeProviderProps } from "next-themes";
export interface ColorModeProviderProps extends ThemeProviderProps {
}
export declare function ColorModeProvider(props: ColorModeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useColorMode(): {
    colorMode: string | undefined;
    setColorMode: import("react").Dispatch<import("react").SetStateAction<string>>;
    toggleColorMode: () => void;
};
export declare function useColorModeValue<T>(light: T, dark: T): T;
export declare function ColorModeIcon(): import("react/jsx-runtime").JSX.Element;
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {
}
interface ColorModeButtonExtendedProps {
    variant: ConditionalValue<"outline" | "line" | "subtle" | "plain" | "enclosed" | undefined>;
    size: ConditionalValue<'sm' | 'md' | 'lg'>;
}
export declare const ColorModeButtonExtended: (props: ColorModeButtonExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const ColorModeButton: import("react").ForwardRefExoticComponent<ColorModeButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
