"use client";
import { toast } from "react-toastify";

export const toaster = (response: { result: string; message: string }) => {
    toast(response.message, {
        type: response.result === "fail" ? "error" : "success",
    });
};
