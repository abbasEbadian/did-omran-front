import { _fetch } from "@/utils/fetch";
import { build_url } from "..";
export const updateUser = async (formdata: any) => {
    const response = await _fetch(
        build_url("/users/me/"),
        {
            method: "PATCH",
            cache: "no-cache",
            body: formdata,
        },
        true
    );
    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response;
};
