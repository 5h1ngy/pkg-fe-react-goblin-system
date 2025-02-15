import { ReactElement, ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

declare function withDynamicLayouts<T>(opts: {
    layoutName: string;
    loader?: ReactElement;
}, props?: T): ReactElement<T>;
declare function withDynamicPages<T>(opts: {
    pageName: string;
    loader?: ReactElement;
}, props?: T): ReactElement<T>;

interface WithRouterProps {
    router: {
        location: ReturnType<typeof useLocation>;
        navigate: ReturnType<typeof useNavigate>;
    };
}
declare function withRouter<P>(WrappedComponent: ComponentType<P & WithRouterProps>): React.FC<P>;

declare const _default: {
    withDynamicLayouts: typeof withDynamicLayouts;
    withDynamicPages: typeof withDynamicPages;
    withRouter: typeof withRouter;
};

export { _default as default };
