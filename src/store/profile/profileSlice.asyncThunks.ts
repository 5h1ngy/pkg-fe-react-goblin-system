import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '@/services/profile/profileService';

export const doGetProfile = createAsyncThunk(
    'slice/profile/doGetProfile',
    async (_, { rejectWithValue }) =>
        api.getProfile()
            .then(response => response)
            .catch(error => rejectWithValue(error)),
);

export const doEditProfile = createAsyncThunk(
    'slice/profile/doEditProfile',
    async (payload: {id:string, form: FormData}, { rejectWithValue }) =>
        api.editProfile(payload)
            .then(response => response)
            .catch(error => rejectWithValue(error)),
);