export type ResponseUser = {
    id: string,
    firstName: string,
    lastName?: string,
    brithday: string,
    email: string,
}

export type ResponseUserError = {
    status: string;
    message: string;
}