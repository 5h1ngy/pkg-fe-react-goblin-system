import { createSlice } from '@reduxjs/toolkit';

import { doLogin, doRegister, doRefresh } from './authSlice.asyncThunks';
import { initialState } from './authSlice.initialState';
import { reducers } from './authSlice.reducers';
import { extraReducers } from './authSlice.extraReducers';

const slice = createSlice({
    name: 'slice/auth',
    initialState,
    reducers,
    extraReducers,
});

export const authActions = slice.actions;

export const authAsyncActions = {
    doRegister,
    doLogin,
    doRefresh,
};

export const authSlice = slice.reducer;
