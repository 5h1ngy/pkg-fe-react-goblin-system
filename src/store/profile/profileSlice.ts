import { createSlice } from '@reduxjs/toolkit';

import { reducers } from './profileSlice.reducers';
import { initialState } from './profileSlice.initialState';
import { extraReducers } from './profileSlice.extraReducers';
import { doGetProfile, doEditProfile } from './profileSlice.asyncThunks';

const slice = createSlice({
    name: 'slice/profile',
    initialState,
    reducers,
    extraReducers,
});

export const profileActions = slice.actions

export const profileAsyncActions = {
    doGetProfile,
    doEditProfile,
};

export const profileSlice = slice.reducer;
