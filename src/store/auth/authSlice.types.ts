import { ResponseRegisterError, ResponseLoginError } from "@/services/auth/authService.types";

import { STATUS } from "../root.types";

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
