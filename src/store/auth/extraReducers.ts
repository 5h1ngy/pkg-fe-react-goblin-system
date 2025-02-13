import { ActionReducerMapBuilder, Draft, PayloadAction } from '@reduxjs/toolkit';

import { ResponseRegisterError, ResponseLoginError, ResponseRefresh } from '@/services/auth/types';
import { ResponseLogin, ResponseRegister } from '@/services/auth/types';

import { STATUS } from '../shared';
import { State } from "./types";
import { doLogin, doRefresh, doRegister } from './asyncThunks';

export const extraReducers = (builder: ActionReducerMapBuilder<State>) => builder

    /**
     * LOGIN
     */
    .addCase(doLogin.pending, (state: Draft<State>) => {
        state.login.status = STATUS.LOADING;
    })
    .addCase(doLogin.fulfilled, (state: Draft<State>, action: PayloadAction<ResponseLogin>) => {
        state.login.status = STATUS.SUCCESS;
        const { accessToken, refreshToken } = action.payload

        state.accessToken = accessToken;
        state.refreshToken = refreshToken;

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    })
    .addCase(doLogin.rejected, (state: Draft<State>, action) => {
        state.login.status = STATUS.FAILED;
        state.login.error = action.payload as ResponseRegisterError;
    })

    /**
     * REGISTER
     */
    .addCase(doRegister.pending, (state: Draft<State>) => {
        state.register.status = STATUS.LOADING;
    })
    .addCase(doRegister.fulfilled, (state: Draft<State>, action: PayloadAction<ResponseRegister>) => {
        state.register.status = STATUS.SUCCESS;
        const { accessToken, refreshToken } = action.payload

        state.accessToken = accessToken;
        state.refreshToken = refreshToken;

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    })
    .addCase(doRegister.rejected, (state: Draft<State>, action) => {
        state.register.status = STATUS.FAILED;
        state.register.error = action.payload as ResponseLoginError;
    })

    /**
    * REFRESH
    */
    .addCase(doRefresh.pending, (state: Draft<State>) => {
        state.register.status = STATUS.LOADING;
    })
    .addCase(doRefresh.fulfilled, (state: Draft<State>, action: PayloadAction<ResponseRefresh>) => {
        state.register.status = STATUS.SUCCESS;
        const { accessToken, refreshToken } = action.payload

        state.accessToken = accessToken;
        state.refreshToken = refreshToken;

        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    })
    .addCase(doRefresh.rejected, (state: Draft<State>, action) => {
        state.register.status = STATUS.FAILED;
        state.register.error = action.payload as ResponseLoginError;
    })