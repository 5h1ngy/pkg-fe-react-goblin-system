import { Draft } from '@reduxjs/toolkit';
import { STATUS } from '../shared';
import { State } from "./types";

export const reducers = {
    clearErrorsRegister: (state: Draft<State>) => {
        state.register.status = STATUS.IDLE;
        state.register.error = undefined;
    },
    clearErrorsLogin: (state: Draft<State>) => {
        state.login.status = STATUS.IDLE;
        state.login.error = undefined;
    },
}