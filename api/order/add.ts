import { _fetch } from "@/utils/fetch";
import { build_url } from "../index";

export const addToCart = async (id: number, line_type="course") => {
    return await _fetch(build_url("/orders/basket/"), {
        method: "PATCH",
        cache: "no-cache",
        body: JSON.stringify({
            action: "add",
            [line_type]: id,
            quantity: 1,
            line_type
        }),
    });
};
