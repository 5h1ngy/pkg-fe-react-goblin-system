import { ActionFunction, LoaderFunction } from "react-router-dom";

import { store } from "@/store/root.store";
import { asyncActions } from "@/store/root.store";
import { withDynamicPages } from "@/hocs/withDynamicImport";
import Loading from "@/layouts/loading/LoadingLayout"
import { PrivateRoute } from "@/providers/Auth/AuthProvider.PrivateRoute";

export const loader: LoaderFunction | undefined =
    async () => {
        const result: any = await store.dispatch(asyncActions.usersAsyncActions.doGetUsers());

        if (!asyncActions.usersAsyncActions.doGetUsers.fulfilled.match(result)) {
            if (result.payload.message === "ACCESS_TOKEN_INVALID") {

                const tokenResult = await store.dispatch(asyncActions.authAsyncActions.doRefresh({
                    refreshToken: store.getState().authSlice.refreshToken!
                }));

                if (asyncActions.authAsyncActions.doRefresh.fulfilled.match(tokenResult)) {
                    window.location.reload()
                }
            }
        }
    };

export const action: ActionFunction | undefined =
    undefined;

export const element: React.ReactElement =
    <PrivateRoute render={withDynamicPages({ pageName: 'UsersOverview', loader: <Loading /> })} />