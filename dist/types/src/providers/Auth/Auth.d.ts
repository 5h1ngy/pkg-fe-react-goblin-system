import { ReactNode } from 'react';
export interface AuthContextType {
    accessToken?: string;
}
export declare const AuthContext: import("react").Context<AuthContextType>;
declare const Auth: React.FC<{
    children: ReactNode;
}>;
export default Auth;
