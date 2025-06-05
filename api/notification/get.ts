import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const getNotifications = async () => {
    const { result, data } = await _fetch(build_url("/notifications/"), {
        method: "GET",
        cache: "no-cache",
    });

    if (result !== "ok") {
        return [];
    }
    return data;
};
