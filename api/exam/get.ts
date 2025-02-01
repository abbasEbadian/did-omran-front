import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getExams = async () => {
    const response = await _fetch(
        build_url("/exams/"),
        {
            method: "GET",
        },
        true
    );
    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response;
};
