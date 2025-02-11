import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './authProvider.hooks';

export const RedirectPublicRoute: FC<{ render: JSX.Element }> = ({ render }) => {
    const { accessToken } = useAuth();

    if (accessToken) {
        return <Navigate to="/dashboard/profile/overview" />;
    }

    return render;
};