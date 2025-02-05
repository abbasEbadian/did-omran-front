import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const verify = async ({
    mobile,
    otp,
}: {
    mobile: string;
    otp: string;
}) => {
    const { data, result, message } = await _fetch(build_url("/auth/verify/"), {
        method: "POST",
        body: JSON.stringify({ mobile, otp }),
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
