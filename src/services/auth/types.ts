export type ResponseRegister = {
    accessToken: string,
    refreshToken: string,
}

export type ResponseRegisterError = {
    status: string;
    message: string;
}

export type ResponseLogin = {
    accessToken: string,
    refreshToken: string,
}

export type ResponseLoginError = {
    status: string;
    message: string;
}


export type RequestRefresh = {
    refreshToken: string,
}

export type ResponseRefresh = {
    accessToken: string,
    refreshToken: string,
}

export type ResponseRefreshError = {
    status: string;
    message: string;
}

