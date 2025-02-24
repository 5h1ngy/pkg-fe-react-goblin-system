import axios from "axios";
import { registerResponse, loginResponse, refreshResponse } from "./mock";
import { ResponseLoginError } from "./types";
import { ResponseLogin, ResponseRegister, ResponseRegisterError } from "./types";
import { RequestRefresh, ResponseRefresh, ResponseRefreshError } from "./types";
import { errorHandler } from "../handlers";

export async function register(payload: { formData: FormData, appId: string }): Promise<ResponseRegister> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(registerResponse), 1000));

    } else {
        return await errorHandler<ResponseRegister, ResponseRegisterError>(async () =>
            (await axios.post<ResponseRegister>(
                `${import.meta.env.VITE_API}/auth/register`,
                payload.formData,
                { headers: { 'app-id': payload.appId } }
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
            (await axios.post<ResponseLogin>(`${import.meta.env.VITE_API}/auth/login`, payload)).data
        )
    }
}

export async function refresh(payload: RequestRefresh): Promise<ResponseRefresh> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(refreshResponse), 1000));

    } else {
        return await errorHandler<ResponseRefresh, ResponseRefreshError>(async () =>
            (await axios.post<ResponseRefresh>(`${import.meta.env.VITE_API}/auth/refresh`, payload)).data
        )
    }
}