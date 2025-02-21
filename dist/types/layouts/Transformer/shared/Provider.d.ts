import React from "react";
import { NavigateFunction, Location } from "react-router-dom";
import { ComponentProps, ContextType } from "../transformer.types";
export declare const Context: React.Context<ContextType | undefined>;
export default function withContext<T extends ComponentProps>(WrappedComponent: React.ComponentType<T>, location?: Location<any>, navigate?: NavigateFunction): React.FC<T>;
