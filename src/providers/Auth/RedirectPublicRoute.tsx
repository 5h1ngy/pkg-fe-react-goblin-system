import { FC, JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './shared/hooks';

const RedirectPublicRoute: FC<{ render: JSX.Element }> = ({ render }) => {
    const { accessToken } = useAuth();

    if (accessToken) {
        return <Navigate to="/dashboard/profile/overview" />;
    }

    return render;
};

export default RedirectPublicRoute