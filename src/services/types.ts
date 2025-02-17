export type ResponsePaginated<T> = {
    occurrences: T[];
    offset: number;
    size: number;
    totalOccurrences: number,
    totalPages: number,
}

export type Response<T> = T;

export type RequestPaginated = {
    offset: number;
    size: number;
}