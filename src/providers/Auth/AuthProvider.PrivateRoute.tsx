import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './authProvider.hooks';

export const PrivateRoute: FC<{ render: JSX.Element }> = ({ render }) => {
    const { accessToken } = useAuth();

    if (!accessToken) {
        return <Navigate to="/auth/login" />;
    }

    return render;
};