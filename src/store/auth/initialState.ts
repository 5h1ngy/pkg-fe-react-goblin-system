import { STATUS } from '../types';
import { State } from "./types";

export const initialState: State = {
        accessToken: localStorage.getItem('accessToken') || undefined,
        refreshToken: localStorage.getItem('refreshToken') || undefined,
        login: {
            status: STATUS.IDLE,
            error: undefined,
        },
        register: {
            status: STATUS.IDLE,
            error: undefined,
        },
    }