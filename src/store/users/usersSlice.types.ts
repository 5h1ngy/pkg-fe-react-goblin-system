import { STATUS } from "../root.types";

export type User = {
    id: string,
    firstName: string,
    lastName?: string,
    brithday: string,
    age: number,
    email: string,
}

export type State = {
    occurrences?: User[];
    pagination?: {
        offset: number;
        size: number;
        totalOccurrences: number,
        totalPages: number,
    };
    status: STATUS;
    error: any;
}