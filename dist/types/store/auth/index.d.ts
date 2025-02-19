export declare const authActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clearErrorsRegister: (state: import("immer").Draft<import("./types").State>) => void;
    clearErrorsLogin: (state: import("immer").Draft<import("./types").State>) => void;
}, "slice/auth">;
export declare const authAsyncActions: {
    doRegister: import("@reduxjs/toolkit").AsyncThunk<import("../../services/auth/types").ResponseRegister, FormData, {
        state?: unknown;
        dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    doLogin: import("@reduxjs/toolkit").AsyncThunk<import("../../services/auth/types").ResponseLogin, FormData, {
        state?: unknown;
        dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    doRefresh: import("@reduxjs/toolkit").AsyncThunk<import("../../services/auth/types").ResponseRefresh, import("../../services/auth/types").RequestRefresh, {
        state?: unknown;
        dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
};
export declare const authSlice: import("redux").Reducer<import("./types").State>;
