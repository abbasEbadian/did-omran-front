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
import { z } from "zod";

function OTP() {
    const searchParams = useSearchParams();
    const mobile = searchParams.get("mobile") || "";
    if (!mobile) {
        redirect("/auth");
    }
    const [otp, setOtp] = React.useState<string>("");
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [timer, setTimer] = React.useState<number>(120);
    const [isResendDisabled, setIsResendDisabled] =
        React.useState<boolean>(true);

    const codeSchema = z.string().regex(/^\d{4}$/, {
        message: "کد باید 4 رقمی باشد",
    });

    const resend = async () => {
        const response = await login({ mobile });
        toaster(response);
        setTimer(60);
        setIsResendDisabled(true);
    };

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const validationResult = codeSchema.safeParse(otp);
        if (!validationResult.success) {
            setError(validationResult.error.errors[0].message);
            return;
        }
        
        const result = await verify({ mobile, otp });
        toaster(result);
        debugger;
        if (result.result === "ok") {
            await setToken(result.access);
            redirect("/dashboard");
        }
    };
    React.useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setIsResendDisabled(false);
        }
    }, [timer]);
    React.useEffect(() => {
        if(otp.length === 4) setError(undefined)
    }, [otp])
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
                            error={error}
                        />
                        <button
                            className="text-gray-400 mb-6 mt-1 text-end w-full"
                            onClick={resend}
                            // disabled={isResendDisabled}
                        >
                            {isResendDisabled
                                ? `ارسال مجدد ${timer} ثانیه`
                                : "ارسال مجدد"}
                        </button>
                        <FormButton className="w-full px-4 py-3 bg-did text-white rounded-2xl hover:bg-did/90 transition">
                            تایید و ادامه
                        </FormButton>
                    </form>
                </div>
            </div>
        </>
    );
}

export default OTP;
