import { createAsyncThunk, } from '@reduxjs/toolkit';
import { RequestPaginated } from "@/services/root.types";
import * as api from '@/services/users/usersService';

export const doGetUsers = createAsyncThunk(
    'slice/users/doGetUsers',
    async (payload: RequestPaginated | undefined, { rejectWithValue }) =>
        api.getUsers(payload?.offset, payload?.size)
            .then(response => response)
            .catch(error => rejectWithValue(error)),
);