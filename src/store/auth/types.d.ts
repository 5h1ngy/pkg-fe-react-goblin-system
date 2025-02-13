import { ResponseRegisterError, ResponseLoginError } from "@/services/auth/types";

import { STATUS } from "../types";

export type State = {
    accessToken?: string;
    refreshToken?: string;
    register: {
        status: STATUS;
        error?: ResponseRegisterError;
    },
    login: {
        status: STATUS;
        error?: ResponseLoginError;
    },
}
