import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getUser = async () => {
    const response = await _fetch(build_url("/users/me/"), {
        method: "GET",
        // cache: 'no-cache',
        next: {
            tags: ['profile']
        }
    });
    if (!response.result || response?.result !== 'ok') {
        return undefined
    }
    return response.data;
};
