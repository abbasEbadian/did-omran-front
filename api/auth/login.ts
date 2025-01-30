import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const login = async ({ mobile }: { mobile: string }) => {
    const response = await _fetch(build_url("/auth/otp/"), {
        method: "POST",
        body: JSON.stringify({ mobile }),
    });
    if (!response.result || response?.result !== 'ok') {
        return {
            result: "fail",
            message: response?.message || "خطا در ارتباط با سرور",
        };
    }
    return response;
};
