import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { STATUS } from '../root.types';
import { Profile, State } from "./profileSlice.types";
import { doGetProfile } from './profileSlice.asyncThunks';

export const extraReducers = (builder: ActionReducerMapBuilder<State>) => builder

    .addCase(doGetProfile.pending, (state) => {
        state.overview.status = STATUS.LOADING;
    })
    .addCase(doGetProfile.fulfilled, (state, action) => {
        state.overview.status = STATUS.SUCCESS;

        state.overview.occurrence = Object.entries(action.payload).filter(([key]) =>
            key === "id" || 
            key === "first_name" || key === "last_name" || key === "bday" || key === "username" ||
            key === "gender" || key === "email"
        ).reduce((acc: Record<string, any>, current) => {
            const [key, value] = current;
            acc[key] = value;
            return acc
        }, {}) as Profile;

        state.overview.occurrence.age = 28
    })
    .addCase(doGetProfile.rejected, (state, action) => {
        state.overview.status = STATUS.FAILED;

        state.overview.error = action.error.message;
    })