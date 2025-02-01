import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const createTicket = async (formdata: any) => {
    const response = await _fetch(build_url("/tickets/"), {
        method: "POST",
        cache: 'no-cache',
        body: formdata, 
    }, true);
    debugger
    if (!response.result || response?.result !== 'ok') {
        return undefined
    }
    return response;
}