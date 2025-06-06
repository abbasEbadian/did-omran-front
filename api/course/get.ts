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
    const { data, result } = await _fetch(build_url("/courses/" + id + "/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return undefined;
    }
    return data;
}

export const getTutor = async (id: number) => {
    const { data, result } = await _fetch(build_url("/courses/tutors/" + id + "/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return undefined;
    }
    return data;
}