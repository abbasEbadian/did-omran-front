import { _fetch } from "@/utils/fetch";
import { build_url } from "../index";

export const addToCart = async (id: number) => {
    return await _fetch(build_url("/orders/basket/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "add",
            course: id,
            quantity: 1,
        }),
    });
};
