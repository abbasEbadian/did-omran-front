"use client";
import React from "react";
import FloatingLabelInput from "../FloatingLabelInput";
import { _fetch } from "@/utils/fetch";
import { login } from "@/api";
import { toaster } from "@/utils/toaster";
import { redirect } from "next/navigation";
import { FormButton } from "../FormButton";

function Login() {
    const [mobile, setMobile] = React.useState<string>("");

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const response = await login({ mobile });
        toaster(response);
        if (response.result === "ok") {
            redirect("/auth/otp?mobile=" + mobile);
        }
    };

    return (
        <>
            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-8 text-center text-secondary800">
                        ورود به دید عمران
                    </h2>
                    <form className="space-y-8" onSubmit={(e) => submit(e)}>
                        <FloatingLabelInput
                            label={"شماره موبایل"}
                            dir="ltr"
                            value={mobile}
                            setValue={setMobile}
                        />
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

export default Login;
