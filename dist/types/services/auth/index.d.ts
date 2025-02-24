import { ResponseLogin, ResponseRegister } from "./types";
import { RequestRefresh, ResponseRefresh } from "./types";
export declare function register(payload: {
    formData: FormData;
    appId: string;
}): Promise<ResponseRegister>;
export declare function login(payload: FormData): Promise<ResponseLogin>;
export declare function refresh(payload: RequestRefresh): Promise<ResponseRefresh>;
