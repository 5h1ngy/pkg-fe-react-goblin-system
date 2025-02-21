import React, { createContext, FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Toaster } from "@/components/Factory/Chakra/toaster";
import { ComponentProps, ContextType } from "../transformer.types";

export const Context = createContext<ContextType | undefined>(undefined);

export default function withContext<T extends ComponentProps>(
    WrappedComponent: React.ComponentType<T>
) {
    const HOC: FC<T> = (props) => {
        const location = useLocation();
        const [background, setBackground] = useState(props.background);

        useEffect(() => {
            setBackground(props.background);
        }, [location.pathname]);

        return (
            <Context.Provider value={{ props: { ...props, background }, setBackground, }}>
                <WrappedComponent {...props} />
                <Toaster />
            </Context.Provider>
        );
    };

    HOC.displayName = `withTransformerLayout(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return HOC;
}
