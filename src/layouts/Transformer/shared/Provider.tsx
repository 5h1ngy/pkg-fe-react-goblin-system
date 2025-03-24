import React, { createContext, FC, useEffect, useRef, useState } from "react";

import { Toaster } from "@/components/Factory/Chakra/toaster";
import { ComponentProps, ContextType } from "../transformer.types";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "./hooks";
import { scrollToSection } from "./utils";

export const Context = createContext<ContextType | undefined>(undefined);

export default function withContext<T extends ComponentProps>(
    WrappedComponent: React.ComponentType<T>,
) {
    const HOC: FC<T> = (props) => {
        const location = useLocation()
        const navigate = useNavigate()
        const circleRef = useRef<HTMLDivElement>(null);
        const isMobileRef = useMediaQuery('(max-width: 768px)');

        const [background, setBackground] = useState(props.background);
        const [footer, setFooter] = useState<React.ReactNode | undefined>(undefined);

        useEffect(() => {
            setBackground(props.background);
        }, [props?.location?.pathname]);

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
            if (isMobileRef) return;
            document.addEventListener("mousemove", handleMouseMove);
            return () => document.removeEventListener("mousemove", handleMouseMove);
        }, [isMobileRef]);

        return (
            <Context.Provider
                value={{
                    props: { ...props, background, location, navigate },
                    handleNavigationAndScroll,
                    setBackground,footer,setFooter,
                }}
            >
                <WrappedComponent {...props} />
                <Toaster />
            </Context.Provider>
        );
    };

    HOC.displayName = `withTransformerLayout(${WrappedComponent.displayName || WrappedComponent.name || "Transformer"})`;

    return HOC;
}
