import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getCourses = async () => {
    const { result, data } = await _fetch(build_url("/courses/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};

export const getCourse = async (id: number) => {
    const response = await _fetch(build_url("/courses/" + id + "/"), {
        method: "GET",
        cache: "no-cache",
    });

    if ((!response.result || response?.result !== "ok") && !response.id) {
        return undefined;
    }
    return response;
};
