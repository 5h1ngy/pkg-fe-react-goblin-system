import React, { createContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, State, asyncActions } from '@/store/root.store';

export interface AuthContextType {
    accessToken?: string;
    login: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const accessToken = useSelector((state: State) => state.authSlice.accessToken);
    const dispatch = useDispatch<Dispatch>();

    const login = (payload: any) => dispatch(asyncActions.authAsyncActions.doLogin(payload));

    return (
        <AuthContext.Provider value={{ accessToken, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

