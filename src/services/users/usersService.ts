import axios from "axios";

import { errorHandler } from "../root.handlers";
import { ResponsePaginated } from "../root.types";
import { ResponseUser, ResponseUserError } from "./usersService.types";
import { userResponse } from "./usersService.mock";

export async function getUsers(offset: number = 0, size: number = 10): Promise<ResponsePaginated<ResponseUser>> {

    if (import.meta.env.VITE_USE_MOCK === "true") {
        console.log("Modalità Mock attiva. Restituisco dati mock.");
        return new Promise((resolve) => setTimeout(() => resolve(userResponse), 1000));

    } else {

        return await errorHandler<ResponsePaginated<ResponseUser>, ResponseUserError>(async () =>
            (await axios.get<ResponsePaginated<ResponseUser>>(
                `/api/be-node-auth/users?offset=${offset}&size=${size}`,
                { headers: { "Authorization": "Bearer " + localStorage.getItem('accessToken') } }
            )).data
        )
    }
}