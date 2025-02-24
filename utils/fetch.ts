"use server";
import { getToken } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function _fetch(
    url: string,
    options: RequestInit = {},
    isMedia = false
) {
    const token = await getToken();

    const headers = {
        Authorization: `Bearer ${token}`,
        ...(!isMedia ? { "Content-Type": "application/json" } : {}),
        ...options.headers,
    };
    try {
        const response = await fetch(url, {
            cache: "force-cache",
            ...options,
            headers,
        });
        console.log({response});

        const res = await response.json();

        

        switch (response.status) {
            case 401:
                (await cookies()).delete("token");
                return redirect("/auth");

            case 400:
                return {
                    result: "fail",
                    message: res.message || "خطا در ارتباط با سرور",
                };

            case 201:
                return {
                    result: "ok",
                    message: "با موفقیت ثبت شد.",
                };
            case 200:
                return {
                    result: "ok",
                    message: res.message || "با موفقیت ثبت شد.",
                    data: res.data,
                };
            default:
                return {
                    result: "fail",
                    message: "خطا در ارتباط با سرور",
                };
        }
    } catch (e) {
        return {
            result: "fail",
            message: "خطا در ارتباط با سرور",
        };
    }

}
