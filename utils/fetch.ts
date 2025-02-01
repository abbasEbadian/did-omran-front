"use server"
import { getToken } from "@/auth";
import { cookies } from "next/headers";

export async function _fetch(url: string, options: RequestInit = {}, isMedia = false) {
    const token = await getToken();
    
    const headers = {
        Authorization: `Bearer ${token}`,
        ...(!isMedia? {'Content-Type':'application/json'}: {}),
        ...options.headers,
    };
    
    console.log("Request:", url, options);
    try {
        const _response = await fetch(url, { cache: 'force-cache', ...options, headers});

        const response = await _response.json();
        console.log({response});

        if (_response.status === 401) {
            await (await cookies()).delete("token");
            window.location.href = "/auth";
        }
        if (response?.result?.at(0) === "fail") {
            return {
                result: "fail",
                message: response?.message?.at(0) || "خطا در ارتباط با سرور",
            };
        }

        return response;
    } catch (e) {
        return {
            result: "fail",
            message: "خطا در ارتباط با سرور",
        };
    }
}
