import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const login = async ({ mobile }: { mobile: string }) => {
    const response = await fetch(build_url("/auth/otp/"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
    });

    if (!response.ok) {
        return {
            result: "fail",
            message: "خطا در ارتباط با سرور",
        };
    }
    const data = await response.json();
    return data;
};
