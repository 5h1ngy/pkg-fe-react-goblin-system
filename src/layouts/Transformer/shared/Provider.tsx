import React, { createContext, FC, useEffect, useState } from "react";

import { Toaster } from "@/components/Factory/Chakra/toaster";
import { HocProps, ContextType } from "../transformer.types";

export const Context = createContext<ContextType | undefined>(undefined);

export default function withContext<T extends HocProps>(
    WrappedComponent: React.ComponentType<T>
) {
    const HOC: FC<T> = (props) => {
        const [background, setBackground] = useState(props.background);

        useEffect(() => {
            setBackground(props.background);
        }, [props?.location?.pathname]);

        return (
            <Context.Provider
                value={{ props: { ...props, background, location: props.location, navigate: props.navigate }, setBackground }}
            >
                <WrappedComponent {...props} />
                <Toaster />
            </Context.Provider>
        );
    };

    HOC.displayName = `withTransformerLayout(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"
        })`;

    return HOC;
}
