import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const closeTicket = async (id: number) => {
    return await _fetch(build_url("/tickets/"+id+"/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "close",
        }),
    });
};

export const sendTicketMessage = async ({id, message}: {id: number, message: string}) => {
    return await _fetch(build_url("/tickets/"+id+"/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "add_message",
            message
        }),
    });
};
