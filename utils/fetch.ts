import { getToken } from "@/auth";

export async function _fetch(url: string, options: RequestInit = {}) {
    const token = await getToken();
    
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...options.headers,
    };

    console.log("Request:", url, options);
    try {
        const _response = await fetch(url, { headers, cache: 'force-cache', ...options});
        const response = await _response.json();
        console.log(response);
        
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
