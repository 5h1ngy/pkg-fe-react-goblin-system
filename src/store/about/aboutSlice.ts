import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAbout, } from '@/services/markdown/markdownService';
import { STATUS } from '../root.types';
import { State } from './aboutSlice.types';

const slice = createSlice({
    name: 'slice/about',
    initialState: {
        occurrence: undefined,
        status: STATUS.IDLE,
        error: undefined,
    } as State,
    reducers: {},
    extraReducers: (builder) => builder

        .addCase(doGetAbout.pending, (state) => {
            state.status = STATUS.LOADING;
        })
        .addCase(doGetAbout.fulfilled, (state, action) => {
            state.status = STATUS.SUCCESS;
            state.occurrence = action.payload;
        })
        .addCase(doGetAbout.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
        })
});

const doGetAbout = createAsyncThunk(
    'slice/about/doGetAbout',
    async () => await getAbout()
);

export const aboutActions = slice.actions;

export const aboutAsyncActions = {
    doGetAbout,
};

export const aboutSlice = slice.reducer;
