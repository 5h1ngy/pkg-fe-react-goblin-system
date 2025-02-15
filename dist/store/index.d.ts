import * as redux_thunk from 'redux-thunk';
import * as redux from 'redux';
import * as _reduxjs_toolkit from '@reduxjs/toolkit';

type ResponseRegister = {
    accessToken: string,
    refreshToken: string,
}

type ResponseRegisterError = {
    status: string;
    message: string;
}

type ResponseLogin = {
    accessToken: string,
    refreshToken: string,
}

type ResponseLoginError = {
    status: string;
    message: string;
}


type RequestRefresh = {
    refreshToken: string,
}

type ResponseRefresh = {
    accessToken: string,
    refreshToken: string,
}

declare enum STATUS {
    IDLE = 0,
    LOADING = 1,
    SUCCESS = 2,
    FAILED = 3
}

type State = {
    accessToken?: string;
    refreshToken?: string;
    register: {
        status: STATUS;
        error?: ResponseRegisterError;
    },
    login: {
        status: STATUS;
        error?: ResponseLoginError;
    },
}

declare const authActions: _reduxjs_toolkit.CaseReducerActions<{
    clearErrorsRegister: (state: _reduxjs_toolkit.Draft<State>) => void;
    clearErrorsLogin: (state: _reduxjs_toolkit.Draft<State>) => void;
}, "slice/auth">;
declare const authAsyncActions: {
    doRegister: _reduxjs_toolkit.AsyncThunk<ResponseRegister, FormData, {
        state?: unknown;
        dispatch?: redux_thunk.ThunkDispatch<unknown, unknown, redux.UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    doLogin: _reduxjs_toolkit.AsyncThunk<ResponseLogin, FormData, {
        state?: unknown;
        dispatch?: redux_thunk.ThunkDispatch<unknown, unknown, redux.UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    doRefresh: _reduxjs_toolkit.AsyncThunk<ResponseRefresh, RequestRefresh, {
        state?: unknown;
        dispatch?: redux_thunk.ThunkDispatch<unknown, unknown, redux.UnknownAction>;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
};
declare const authSlice: redux.Reducer<State>;

declare const auth_authActions: typeof authActions;
declare const auth_authAsyncActions: typeof authAsyncActions;
declare const auth_authSlice: typeof authSlice;
declare namespace auth {
  export { auth_authActions as authActions, auth_authAsyncActions as authAsyncActions, auth_authSlice as authSlice };
}

declare const _default: {
    auth: typeof auth;
    STATUS: typeof STATUS;
};

export { _default as default };
