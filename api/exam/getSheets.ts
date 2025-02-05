import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getSheets = async () => {
    const {result, data} = await _fetch(
        build_url("/exams/answer-sheets/"),
        {
            method: "GET",
            cache: "no-cache"
        }
    );
    if (result !== "ok") {
        return [];
    }
    return data;
};
