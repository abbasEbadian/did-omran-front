import { _fetch } from "@/utils/fetch";
import { build_url } from "../index";

export const removeCartItem = async (id: number, line_type="course") => {
    return await _fetch(build_url("/orders/basket/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "remove",
            [line_type]: id,
            quantity: 1,
            line_type
        }),
    });
};
