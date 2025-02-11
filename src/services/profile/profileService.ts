import axios from "axios";
import { profileResponse } from "./profileService.mock";
import { ProfileResponse } from "./profileService.types";
import { errorHandler } from "../root.handlers";
import { ResponseProfileError } from "./profileService.types";

export async function getProfile(): Promise<ProfileResponse> {
    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(profileResponse), 1000));

    } else {
        return await errorHandler<ProfileResponse, ResponseProfileError>(async () =>
            (await axios.get<ProfileResponse>(
                `/api/be-node-auth/user/current`,
                { headers: { "Authorization": "Bearer " + localStorage.getItem('accessToken') } }
            )).data
        )

    }
}

export async function editProfile(payload: { id: string, form: FormData }): Promise<""> {
    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(""), 1000));

    } else {
        return await errorHandler<"", ResponseProfileError>(async () =>
            (await axios.put<"">(
                `/api/be-node-auth/user/${payload.id}`,
                payload.form,
                { headers: { "Authorization": "Bearer " + localStorage.getItem('accessToken') } }
            )).data
        )

    }
}