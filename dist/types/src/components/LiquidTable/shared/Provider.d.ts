import React, { FC } from 'react';
import { ComponentProps, ContextType } from '../liquidTable.types';
export declare const Context: React.Context<ContextType>;
declare const withContext: <P extends object>(WrappedComponent: React.ComponentType<P>) => FC<ComponentProps & P>;
export default withContext;
