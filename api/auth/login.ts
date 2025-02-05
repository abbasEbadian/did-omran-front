import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const login = async ({ mobile }: { mobile: string }) => {
    const { result, data, message } = await _fetch(build_url("/auth/otp/"), {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({ mobile }),
    });
    if (result !== "ok") {
        return {
            result: "fail",
            message: message || "خطا در ارتباط با سرور",
        };
    }
    return {
        result,
        data,
        message,
    };
};
