import { _fetch } from "@/utils/fetch";
import { build_url } from "..";
import { EducationType } from "@/api/education/types";

export const getEducations = async () => {
    const {result, data} = await _fetch(build_url("/educations/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};

export const getEducation: (id: number) => Promise<EducationType> = async (id: number) => {
    const {data, result} = await _fetch(build_url("/educations/" + id + "/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return undefined;
    }
    return data;
};
