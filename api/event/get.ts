import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getEvents = async () => {
    const { result, data } = await _fetch(build_url("/events/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};


export const getEvent = async (id: number) => {
    const { result, data } = await _fetch(build_url("/events/"+id+"/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return {};
    }
    return data;
};
