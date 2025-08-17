import {_fetch} from "@/utils/fetch";
import {build_url} from "..";

export type SendContactProps = {
    name: string;
    email: string;
    message: string;
}
export const sendContact = async (body: SendContactProps) => {
    const {result, data, message} = await _fetch(build_url("/contact"), {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(body),
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
