import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";

import { scrollToSection } from "./utils";
import { Context } from './Provider';
import { ContextType } from '../transformer.types';

export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);

        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
}

export function useHooks(navigationScroll?: boolean) {
    const location = useLocation();
    const circleRef = useRef<HTMLDivElement>(null);
    const isMobileRef = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (navigationScroll) {
          const handleLoad = () => setTimeout(() => scrollToSection(location.pathname.split('/').pop() || ""), 1000);
      
          if (document.readyState === 'complete') {
            handleLoad();
          } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
          }
        }
      }, []);

    return { isMobileRef, circleRef }
}

export function useFooter(footerElement: ReactNode) {
    const { setFooter } = usePageContext();

    useEffect(() => {
        setFooter(footerElement);
        return () => setFooter(undefined);
    }, [footerElement, setFooter]);
}

export const usePageContext = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useDashboard must be used within Dashboard page');
    }

    return context;
};