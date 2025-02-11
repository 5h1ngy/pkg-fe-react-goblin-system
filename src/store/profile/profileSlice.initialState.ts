import { STATUS } from '../root.types';
import { State } from "./profileSlice.types";

export const initialState: State = {
    overview: {
        occurrence: undefined,
        status: STATUS.IDLE,
        error: null,
    },
    edit: {
        status: STATUS.IDLE,
        error: null,
    }
} 