"use client";
import React, { useRef } from "react";
import FloatingLabelInput from "../FloatingLabelInput";
import { _fetch } from "@/utils/fetch";
import { login } from "@/api";
import { toaster } from "@/utils/toaster";
import { redirect, useSearchParams } from "next/navigation";
import { FormButton } from "../FormButton";
import { z } from "zod";

function Login() {
    const params = useSearchParams();
    const [mobile, setMobile] = React.useState<string>("");
    const [error, setError] = React.useState<string | undefined>(undefined);

    const mobileSchema = z.string().regex(/^09\d{9}$/, {
        message: "شماره موبایل نامعتبر است. باید به فرمت 09141234567 باشد",
    });

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const result = mobileSchema.safeParse(mobile);
        if (!result.success) {
            return setError(result.error.errors[0].message);
        }
        setError(undefined);
        const response = await login({ mobile });
        toaster(response);
        if (response.result === "ok") {
            let url = "/auth/otp?mobile=" + mobile;
            const next = params.get("next");
            if (next) {
                url += "&next=" + next;
            }
            redirect(url);
        }
    };

    return (
        <>
            <form className="space-y-8 w-1/3" onSubmit={(e) => submit(e)}>
                <FloatingLabelInput
                    label={"شماره موبایل"}
                    dir="ltr"
                    value={mobile}
                    setValue={setMobile}
                    error={error}
                />
                <FormButton className="w-full px-4 py-3 bg-did text-white rounded-2xl hover:bg-did/90 transition">
                    تایید و ادامه
                </FormButton>
            </form>
        </>
    );
}

export default Login;
