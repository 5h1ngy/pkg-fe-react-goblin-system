import { RequestRefresh } from '@/services/auth/types';
export declare const doRegister: import("@reduxjs/toolkit").AsyncThunk<import("@/services/auth/types").ResponseRegister, {
    formData: FormData;
    appId: string;
}, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const doLogin: import("@reduxjs/toolkit").AsyncThunk<import("@/services/auth/types").ResponseLogin, FormData, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const doRefresh: import("@reduxjs/toolkit").AsyncThunk<import("@/services/auth/types").ResponseRefresh, RequestRefresh, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
