import { Slider as ChakraSlider } from "@chakra-ui/react";
export interface SliderProps extends ChakraSlider.RootProps {
    marks?: Array<number | {
        value: number;
        label: React.ReactNode;
    }>;
    label?: React.ReactNode;
    showValue?: boolean;
}
export declare const Slider: import("react").ForwardRefExoticComponent<SliderProps & import("react").RefAttributes<HTMLDivElement>>;
