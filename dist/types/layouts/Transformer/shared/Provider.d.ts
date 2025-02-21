import React from "react";
import { HocProps, ContextType } from "../transformer.types";
export declare const Context: React.Context<ContextType | undefined>;
export default function withContext<T extends HocProps>(WrappedComponent: React.ComponentType<T>): React.FC<T>;
