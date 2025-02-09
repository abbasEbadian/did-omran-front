import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getBlogs = async () => {
    const { result, data } = await _fetch(build_url("/blogs/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};
