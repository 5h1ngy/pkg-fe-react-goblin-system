import { STATUS } from "../root.types";

export type Profile = {
    id: string,
    first_name: string,
    last_name: string,
    bday: string,
    age: number,
    username: string,
    gender: string,
    email: string,
}

export type State = {
    overview: {
        occurrence?: Profile;
        status: STATUS;
        error: any;
    };
    edit: {
        status: STATUS;
        error: any;
    };
}