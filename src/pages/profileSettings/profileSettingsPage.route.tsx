import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";

import { asyncActions, store } from "@/store/root.store";
import { withDynamicPages } from "@/hocs/withDynamicImport";
import { PrivateRoute } from "@/providers/Auth/AuthProvider.PrivateRoute";
import Loading from "@/layouts/loading/LoadingLayout";

export const loader: LoaderFunction | undefined =
    async () => {
        const result: any = await store.dispatch(asyncActions.profileAsyncActions.doGetProfile());

        if (!asyncActions.profileAsyncActions.doGetProfile.fulfilled.match(result)) {
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
    async ({ request }) => {
        const formData = await request.formData();
        if (formData.get("gender") === "undefined" || formData.get("gender") === "null") {
            formData.delete("gender")
        }

        const result = await store.dispatch(asyncActions.profileAsyncActions.doEditProfile({
            id: store.getState().profileSlice.overview.occurrence!.id, form: formData
        }))
        if (asyncActions.profileAsyncActions.doEditProfile.fulfilled.match(result)) {
            return redirect("/dashboard/profile/overview");
        }
    };

export const element: React.ReactElement =
    <PrivateRoute render={withDynamicPages({ pageName: 'ProfileSettings', loader: <Loading /> })} />