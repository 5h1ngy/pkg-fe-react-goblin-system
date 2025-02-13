import { createSlice } from '@reduxjs/toolkit';

import { doLogin, doRegister, doRefresh } from './asyncThunks';
import { initialState } from './initialState';
import { reducers } from './reducers';
import { extraReducers } from './extraReducers';

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
