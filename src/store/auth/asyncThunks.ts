import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '@/services/auth';
import { RequestRefresh } from '@/services/auth/types';

export const doRegister = createAsyncThunk(
    'slice/auth/doRegister',
    async (payload: FormData, { rejectWithValue }) =>
        api.register(payload)
            .then(response => response)
            .catch(error => rejectWithValue(error))
);

export const doLogin = createAsyncThunk(
    'slice/auth/doLogin',
    async (payload: FormData, { rejectWithValue }) =>
        api.login(payload)
            .then(response => response)
            .catch(error => rejectWithValue(error))
);

export const doRefresh = createAsyncThunk(
    'slice/auth/doRefresh',
    async (payload: RequestRefresh, { rejectWithValue }) =>
        api.refresh(payload)
            .then(response => response)
            .catch(error => rejectWithValue(error))
);