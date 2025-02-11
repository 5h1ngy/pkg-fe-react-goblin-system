import { configureStore } from '@reduxjs/toolkit';

import { aboutSlice, aboutActions, aboutAsyncActions } from './about/aboutSlice';
import { authSlice, authActions, authAsyncActions } from './auth/authSlice';
import { profileSlice, profileActions, profileAsyncActions } from './profile/profileSlice';
import { usersSlice, usersActions, usersAsyncActions } from './users/usersSlice';

const reducer = {
    aboutSlice,
    authSlice,
    profileSlice,
    usersSlice,
};

export const actions = {
    aboutActions,
    authActions,
    profileActions,
    usersActions,
}

export const asyncActions = {
    aboutAsyncActions,
    authAsyncActions,
    profileAsyncActions,
    usersAsyncActions,
}

export const store = configureStore({
    reducer
});

export type Dispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
