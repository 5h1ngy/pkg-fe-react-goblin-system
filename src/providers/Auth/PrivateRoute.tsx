import { FC, JSX } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './shared/hooks';

const PrivateRoute: FC<{ render: JSX.Element }> = ({ render }) => {
    const { accessToken } = useAuth();

    if (!accessToken) {
        return <Navigate to="/auth/login" />;
    }

    return render;
};

export default PrivateRoute