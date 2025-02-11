import axios from "axios";
import { registerResponse, loginResponse, refreshResponse } from "./authService.mock";
import { ResponseLoginError } from "./authService.types";
import { ResponseLogin, ResponseRegister, ResponseRegisterError } from "./authService.types";
import { RequestRefresh, ResponseRefresh, ResponseRefreshError } from "./authService.types";
import { errorHandler } from "../root.handlers";

export async function register(payload: FormData): Promise<ResponseRegister> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(registerResponse), 1000));

    } else {
        return await errorHandler<ResponseRegister, ResponseRegisterError>(async () =>
            (await axios.post<ResponseRegister>(
                `/api/be-node-auth/auth/register`,
                payload
            )).data
        )
    }
}

export async function login(payload: FormData): Promise<ResponseLogin> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(loginResponse), 1000));

    } else {
        return await errorHandler<ResponseLogin, ResponseLoginError>(async () =>
            (await axios.post<ResponseLogin>(`/api/be-node-auth/auth/login`, payload)).data
        )
    }
}

export async function refresh(payload: RequestRefresh): Promise<ResponseRefresh> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(refreshResponse), 1000));

    } else {
        return await errorHandler<ResponseRefresh, ResponseRefreshError>(async () =>
            (await axios.post<ResponseRefresh>(`/api/be-node-auth/auth/refresh`, payload)).data
        )
    }
}