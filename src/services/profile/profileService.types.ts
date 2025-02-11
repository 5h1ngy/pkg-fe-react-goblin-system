export type ProfileResponse = {
    id: string,
    first_name: string,
    last_name: string,
    bday: string,
    username: string,
    gender: string,
    email: string,
}

export type ResponseProfileError = {
    status: string;
    message: string;
}