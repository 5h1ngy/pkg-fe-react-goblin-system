import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

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
    const navigate = useNavigate();
    const circleRef = useRef<HTMLDivElement>(null);
    const isMobileRef = useMediaQuery('(max-width: 519px)');

    function handleMouseMove(event: MouseEvent) {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                x: event.clientX - 50, y: event.clientY - 50,
                duration: 0.1, ease: "power1.out",
            });
        }
    };

    function handleNavigationAndScroll(path: string, navigationScroll?: boolean) {
        if (navigationScroll) {
            navigate(path.replace('/', '').split('/').pop() || "");
            scrollToSection(path.replace('/', '').split('/').pop() || "");
        } else {
            navigate(path, { replace: true })
        }
    }

    useEffect(() => {
        if (navigationScroll) {
            const handleLoad = () => {
                setTimeout(() => {
                    scrollToSection(location.pathname.split('/').pop() || "");
                }, 500);
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
                return () => {
                    window.removeEventListener('load', handleLoad);
                };
            }
        }
    }, []);

    useEffect(() => {
        if (isMobileRef) return;
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [isMobileRef]);

    return { handleNavigationAndScroll, isMobileRef, circleRef }
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