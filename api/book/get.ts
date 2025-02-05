import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getBooks = async () => {
    const response = await _fetch(
        build_url("/books/"),
        {
            method: "GET",
            cache: "no-cache"
        }
    );
    
    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response.data;
};

export const getBook = async (id: number) => {
    const {result, data} = await _fetch(
        build_url("/books/" + id + "/"),
        {
            method: "GET",
            cache: "no-cache"
        }
    );

    if (result !== "ok") {
        return undefined;
    }
    return data;
};
