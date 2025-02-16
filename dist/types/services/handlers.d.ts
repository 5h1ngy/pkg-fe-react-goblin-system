export declare function errorHandler<Response, Error extends {
    status: string;
    message: string;
}>(cb: () => Promise<Response>): Promise<Response>;
