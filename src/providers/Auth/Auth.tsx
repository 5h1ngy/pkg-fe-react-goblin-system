import { createContext, ReactNode } from 'react';
import { useSelector } from 'react-redux';

export interface AuthContextType {
    accessToken?: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) =>
    <AuthContext.Provider
        value={{
            accessToken: useSelector((state: any) => state.authSlice.accessToken)
        }}
    >
        {children}
    </AuthContext.Provider>

export default AuthProvider;
