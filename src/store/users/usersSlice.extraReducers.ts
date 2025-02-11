import { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { ResponsePaginated } from "@/services/root.types";
import { ResponseUser } from '@/services/users/usersService.types';
import { STATUS } from '@/store/root.types';
import { State, User } from "./usersSlice.types";
import { doGetUsers } from './usersSlice.asyncThunks';


export const extraReducers = (builder: ActionReducerMapBuilder<State>) => builder

    .addCase(doGetUsers.pending, (state) => {
        state.status = STATUS.LOADING;
    })
    .addCase(doGetUsers.fulfilled, (state, action: PayloadAction<ResponsePaginated<ResponseUser>>) => {
        state.status = STATUS.SUCCESS;

        state.occurrences = action.payload.occurrences.map(occurrence => {
            const user = Object.entries(occurrence).filter(([key]) =>
                key === "id" || key === "firstName" || key === "lastName" || key === "brithday" || key === "email"
            ).reduce((acc: Record<string, any>, current) => {
                const [key, value] = current;
                acc[key] = value;
                return acc
            }, {}) as User;

            user.age = 26

            return user;
        });

        state.pagination = {
            offset: action.payload.offset,
            size: action.payload.size,
            totalPages: action.payload.totalPages,
            totalOccurrences: action.payload.totalOccurrences,
        }
    })
    .addCase(doGetUsers.rejected, (state, action) => {
        state.status = STATUS.FAILED;

        state.error = action.error.message;
    })
