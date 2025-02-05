import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getExams = async () => {
    const { result, data } = await _fetch(build_url("/exams/"), {
        method: "GET",
        cache: "no-cache",
    });
    if (result !== "ok") {
        return undefined;
    }
    return data;
};

export const getExam = async (id: number) => {
    const response = await _fetch(build_url("/exams/" + id), {
        method: "GET",
        cache: "no-cache",
    });
    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response.data;
};
