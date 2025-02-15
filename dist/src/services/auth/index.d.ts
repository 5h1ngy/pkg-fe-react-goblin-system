import { ResponseLogin, ResponseRegister } from "./types";
import { RequestRefresh, ResponseRefresh } from "./types";
export declare function register(payload: FormData): Promise<ResponseRegister>;
export declare function login(payload: FormData): Promise<ResponseLogin>;
export declare function refresh(payload: RequestRefresh): Promise<ResponseRefresh>;
//# sourceMappingURL=index.d.ts.map