import React from "react";
import { ComponentProps, ContextType } from "../transformer.types";
export declare const Context: React.Context<ContextType | undefined>;
export default function withContext<T extends ComponentProps>(WrappedComponent: React.ComponentType): React.FC<T>;
