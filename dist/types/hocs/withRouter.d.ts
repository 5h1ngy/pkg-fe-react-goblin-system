import { ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export interface WithRouterProps {
    router: {
        location: ReturnType<typeof useLocation>;
        navigate: ReturnType<typeof useNavigate>;
    };
}
export default function withRouter<P>(WrappedComponent: ComponentType<P & WithRouterProps>): React.FC<P>;
