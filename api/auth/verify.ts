import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const verify = async ({ mobile, otp }: { mobile: string, otp: string }) => {
    
    const response = await _fetch(build_url("/auth/verify/"), {
        method: "POST",
        body: JSON.stringify({ mobile, otp }),
    });
    if (!response.result || response?.result !== 'ok') {
        return {
            result: "fail",
            message: response?.message || "خطا در ارتباط با سرور",
        };
    }
    return response;
};
