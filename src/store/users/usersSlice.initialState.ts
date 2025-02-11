import { STATUS } from '@/store/root.types';
import { State } from "./usersSlice.types";

export const initialState: State = {
    occurrences: undefined,
    pagination: undefined,
    status: STATUS.IDLE,
    error: null,
} 