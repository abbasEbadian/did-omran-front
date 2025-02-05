import { _fetch } from "@/utils/fetch";
import { build_url } from "../index";

export const removeCartItem = async (id: number) => {
    return await _fetch(build_url("/orders/basket/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "remove",
            course: id,
            quantity: 1,
        }),
    });
};
