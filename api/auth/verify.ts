import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const verify = async ({ mobile, otp }: { mobile: string, otp: string }) => {
    
    const response = await fetch(build_url("/auth/verify/"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile, otp }),
    });
    debugger
    if (!response.ok && response.status !== 400) {
        return {
            result: "fail",
            message: "خطا در ارتباط با سرور",
        };
    }
    const data = await response.json();
    return data;
};
