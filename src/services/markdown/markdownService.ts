import axios from "axios";

const PATH = `${import.meta.env.VITE_BASENAME}/markdown`;

export async function getAbout(): Promise<string> {
    try {
        return (await axios.get<string>(`${PATH}/about.md`)).data;
    } catch (error) {
        console.error("Errore durante la chiamata al servizio", error);

        throw new Error(<string>error);
    }
}