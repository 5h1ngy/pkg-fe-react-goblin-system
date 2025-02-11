import { createContext, useContext } from "react";
import { ContextType } from "./liquidTableComponent.types";

export const Context = createContext<ContextType | undefined>(undefined);

export const useTableContext = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useTableContext must be used within LiquidTable');
    }

    return context;
};