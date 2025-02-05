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
