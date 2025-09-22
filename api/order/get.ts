import { _fetch } from "@/utils/fetch";
import { build_url } from "..";
import { OrderType } from "./types";

export const getOrders = async (): Promise<OrderType[] | undefined> => {
    const { data, result } = await _fetch(build_url("/orders/"), {
        method: "GET",
        cache: "no-cache",
        next: {
            tags: ["orders"],
        },
    });
    if (result !== "ok") {
        return [];
    }
    return data;
};


export const getOrder: (uuid:string) => Promise<OrderType> = async (uuid: string) => {
    const response = await _fetch(build_url("/orders/" + uuid + "/"), {
        method: "GET",
        cache: "no-cache",
    });
    console.log(build_url("/orders/" + uuid + "/")  );
    if (!response.result || response?.result !== "ok") {
        return undefined;
    }
    return response.data;
};
