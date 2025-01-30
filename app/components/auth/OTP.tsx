"use client";
import React from "react";
import FloatingLabelInput from "../FloatingLabelInput";
import { _fetch } from "@/utils/fetch";
import { login } from "@/api";
import { toaster } from "@/utils/toaster";
import { redirect, useSearchParams } from "next/navigation";
import { verify } from "@/api/auth/verify";
import { setToken } from "@/auth";
import { FormButton } from "../FormButton";

function OTP() {
    const searchParams = useSearchParams();
    const mobile = searchParams.get("mobile") || "";
    if(!mobile) {
        redirect("/auth");
    }
    const [otp, setOtp] = React.useState<string>("");

    const resend = async () => {
        const response = await login({ mobile });
        toaster(response);
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const result = await verify({ mobile, otp });
        toaster(result);
        debugger
        if (result.result === "ok") {
            await setToken(result.access);
            redirect("/dashboard");
        }
    };

    return (
        <>
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-8 text-center text-secondary800">
                        ورود به دید عمران
                    </h2>
                    <form onSubmit={(e) => submit(e)}>
                        <FloatingLabelInput
                            label={"کد یکبار مصرف"}
                            dir="ltr"
                            value={otp}
                            setValue={setOtp}
                        />
                        <button className="text-gray-400 mb-6 mt-1 text-end w-full" onClick={resend}>
                            ارسال مجدد
                        </button>
                        <FormButton
                            className="w-full px-4 py-3 bg-did text-white rounded-2xl hover:bg-did/90 transition"
                        >
                            تایید و ادامه
                        </FormButton>
                    </form>
                </div>
            </div>
        </>
    );
}

export default OTP;
