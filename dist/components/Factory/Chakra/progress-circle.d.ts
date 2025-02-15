import type { SystemStyleObject } from "@chakra-ui/react";
import { ProgressCircle as ChakraProgressCircle } from "@chakra-ui/react";
export declare const ProgressCircleRoot: import("react").ForwardRefExoticComponent<ChakraProgressCircle.RootProps & import("react").RefAttributes<HTMLDivElement>>;
interface ProgressCircleRingProps extends ChakraProgressCircle.CircleProps {
    trackColor?: SystemStyleObject["stroke"];
    cap?: SystemStyleObject["strokeLinecap"];
}
export declare const ProgressCircleRing: import("react").ForwardRefExoticComponent<ProgressCircleRingProps & import("react").RefAttributes<SVGSVGElement>>;
export declare const ProgressCircleValueText: import("react").ForwardRefExoticComponent<ChakraProgressCircle.ValueTextProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=progress-circle.d.ts.map