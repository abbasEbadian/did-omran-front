import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getTickets = async () => {
    const { result, data } = await _fetch(build_url("/tickets/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};

export const getTicket = async (id: number) => {
    const { result, data } = await _fetch(build_url("/tickets/" + id + "/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return undefined;
    }
    return data;
};
