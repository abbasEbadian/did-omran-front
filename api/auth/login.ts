import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const login = async ({ mobile }: { mobile: string }) => {
    const response = await _fetch(build_url("/auth/otp/"), {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({ mobile }),
    });
    debugger
    if (!response.result || response?.result !== 'ok') {
        return {
            result: "fail",
            message: response?.message || "خطا در ارتباط با سرور",
        };
    }
    return response;
};
