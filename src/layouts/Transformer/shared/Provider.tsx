import React, { createContext, FC, useEffect, useState } from "react";

import { Toaster } from "@/components/Factory/Chakra/toaster";
import { ComponentProps, ContextType } from "../transformer.types";
import { useLocation, useNavigate } from "react-router-dom";

export const Context = createContext<ContextType | undefined>(undefined);

export default function withContext<T extends ComponentProps>(
    WrappedComponent: React.ComponentType<T>,
) {
    const HOC: FC<T> = (props) => {
        const location = useLocation()
        const navigate = useNavigate()

        const [background, setBackground] = useState(props.background);
        const [footer, setFooter] = useState<React.ReactNode | undefined>(undefined);

        useEffect(() => {
            setBackground(props.background);
        }, [props?.location?.pathname]);

        return (
            <Context.Provider
                value={{
                    props: { ...props, background, location, navigate },
                    setBackground,
                    footer,
                    setFooter,
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
