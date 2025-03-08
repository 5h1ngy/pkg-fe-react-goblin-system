import { AxiosError } from "axios";

export async function errorHandler<Response, Error extends { status: string, message: string }>(
    cb: () => Promise<Response>
): Promise<Response> {
    try {
        return await cb()
    } catch (error) {
        const exeception = error as AxiosError<Error>;
        if (exeception.response?.data) {
            throw {
                status: exeception.response.data.status,
                message: exeception.response.data.message,
            };
        } else if (exeception.status === 500 && !exeception.response?.data) {
            if (exeception.name === "AxiosError") {
                throw {
                    status: "Errore",
                    message: "Servizi non raggiungibili",
                }
            } else {
                throw {
                    status: "Errore",
                    message: "Errore sconosciuto",
                }
            }
        } else {
            throw {
                status: exeception.status,
                message: exeception.message,
            }
        }
    }
}