import React from "react";
import { ComponentProps, ContextType } from "../transformer.types";
export declare const Context: React.Context<ContextType>;
export default function withContext<T extends ComponentProps>(WrappedComponent: React.ComponentType<T>): React.FC<T>;
