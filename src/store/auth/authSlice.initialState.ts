import { STATUS } from '../root.types';
import { State } from "./authSlice.types";

export const initialState: State = {
        accessToken: localStorage.getItem('accessToken') || undefined,
        refreshToken: localStorage.getItem('refreshToken') || undefined,
        login: {
            form: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
        register: {
            form: undefined,
            status: STATUS.IDLE,
            error: undefined,
        },
    }