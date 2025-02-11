import { createContext, FC, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Toaster } from "@/components/Factory/Chakra/toaster"
import { ComponentProps, ContextType } from "./transformerLayout.types";
import Component from "./TransformerLayout.component";

const provider: FC<ComponentProps> = (props) => {
    const location = useLocation()
    const [background, setBackground] = useState(props.background)
    
    useEffect(() => {
        setBackground(props.background)
    }, [location.pathname])

    return <Context.Provider value={{
        props: { ...props, background },
        setBackground,
    }}>
        <Component />
        <Toaster />
    </Context.Provider>
}

export const Context = createContext<ContextType | undefined>(undefined);

export const usePageContext = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useDashboard must be used within Dashboard page');
    }

    return context;
};

export default provider