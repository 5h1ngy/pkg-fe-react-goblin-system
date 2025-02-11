import { ActionFunction, LoaderFunction } from "react-router-dom";

import { store } from "@/store/root.store";
import { asyncActions } from "@/store/root.store";
import { withDynamicPages } from "@/hocs/withDynamicImport";
import Loading from "@/layouts/loading/LoadingLayout"
import { PrivateRoute } from "@/providers/Auth/AuthProvider.PrivateRoute";

export const loader: LoaderFunction | undefined =
    async () => {
        await store.dispatch(asyncActions.aboutAsyncActions.doGetAbout());
        return null;
    };

export const action: ActionFunction | undefined =
    undefined;

export const element: React.ReactElement =
    <PrivateRoute render={withDynamicPages({ pageName: 'About', loader: <Loading /> })} />