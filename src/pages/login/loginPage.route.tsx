import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";

import { store } from "@/store/root.store";
import { asyncActions } from "@/store/root.store";
import { withDynamicPages } from "@/hocs/withDynamicImport";
import Loading from "@/layouts/loading/LoadingLayout"
import { RedirectPublicRoute } from "@/providers/Auth/AuthProvider.RedirectPublicRoute";

export const loader: LoaderFunction | undefined =
    undefined;

export const action: ActionFunction | undefined =
    async ({ request }) => {
        const formData = await request.formData();
        formData.delete("stay_logged")

        const result = await store.dispatch(asyncActions.authAsyncActions.doLogin(formData))
        if (asyncActions.authAsyncActions.doLogin.fulfilled.match(result)) {
            return redirect("/dashboard/profile/overview");
        }
    };

export const element: React.ReactElement =
    <RedirectPublicRoute render={withDynamicPages({ pageName: 'Login', loader: <Loading /> })} />
