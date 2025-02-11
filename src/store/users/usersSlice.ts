import { createSlice } from '@reduxjs/toolkit';

import { reducers } from './usersSlice.reducers';
import { initialState } from './usersSlice.initialState';
import { extraReducers } from './usersSlice.extraReducers';
import { doGetUsers } from './usersSlice.asyncThunks';

const slice = createSlice({
    name: 'slice/users',
    initialState,
    reducers,
    extraReducers,
});

export const usersActions = slice.actions

export const usersAsyncActions = {
    doGetUsers,
};

export const usersSlice = slice.reducer;

