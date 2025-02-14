import { ContextType } from '../transformer.types';
export default function useMediaQuery(query: string): boolean;
export declare function useMouse(): {
    handleNavigationAndScroll: (path: string, navigationScroll?: boolean) => void;
    isMobileRef: boolean;
    circleRef: import("react").RefObject<HTMLDivElement>;
};
export declare const usePageContext: () => ContextType;
