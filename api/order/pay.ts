import { _fetch } from "@/utils/fetch";
import { build_url } from "..";

export const payOrder = async () => {
    const response = await _fetch(build_url("/orders/basket/payment/"), {
        method: "GET",
        cache: 'no-cache',  
    });
    
    return response;
}