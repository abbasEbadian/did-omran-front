"use client";
import { toast } from "react-toastify";

export const toaster = (response: {
    result: string;
    message: string | string[];
    data?: any;
}) => {
    let { message } = response;
    if (!Array.isArray(message)) {
        message = [message];
    }
    for (let msg of message) {
        toast(msg, {
            type: response.result === "fail" ? "error" : "success",
        });
    }
};
