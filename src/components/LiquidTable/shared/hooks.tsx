import { useContext } from "react";
import { ContextType } from "../liquidTableComponent.types";
import { Context } from "./Provider";

export const useTableContext = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useTableContext must be used within LiquidTable');
    }

    return context;
};