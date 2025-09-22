"use client";
import React, { useState } from "react";
import CartBox from "@/app/components/cart/CartBox";
import SelectPayment from "@/app/components/cart/SelectPayment";
import useSWR from "swr";
import { UserType } from "@/api/types";
import { getUser } from "@/api";
import { cn } from "@/utils/cn";

function Page() {
    const {
        data: user,
        error,
        isLoading,
    } = useSWR<UserType>("get-user", getUser);
    const [code, setCode] = useState("")
    if (!isLoading && user?.basket.lines.length === 0) {
        return (
            <>
                <div className="text-center text-did/70 border border-did/10 py-4 rounded-2xl ">
                    <span>سبد خرید شما خالی است</span>
                </div>
            </>
        );
    }


    return (
        <section className={isLoading ? "opacity-0" : ""}>
            <div className="container mx-auto pb-12">
                <div className="flex items-center justify-start gap-1 border-b-2 border-b-secondary700 border-dashed pb-4">
                    <span className="text-dark text-xl font-semibold">
                        سبد خرید شما
                    </span>
                    <span className="text-secondary900 text-xl font-semibold">
                        ({user?.basket.lines.length} آیتم)
                    </span>
                </div>
                <div className="grid grid-cols-8 py-6 gap-4">
                    <div className=" col-span-8 lg:col-span-5">
                        {user?.basket.lines.map((q) => (
                            <CartBox key={q.id} {...q} />
                        ))}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center sw-ful gap-4">
                                <div className="grow">
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        className={cn("w-full p-4 bg-blue500 placeholder:text-did placeholder:text-sm rounded-2xl text-secondary focus:outline-none focus:border-blue-500 transition",)}
                                        placeholder="کد تخفیف"
                                    />
                                </div>
                                <button
                                    disabled={!code}

                                    className={cn("text-white bg-blue rounded-2xl text-sm p-4 w-[20%] text-center",
                                        !code && "opacity-50 pointer-events-none")}
                                >
                                    اعمال
                                </button>
                            </div>
                            <div className="flex items-start p-4 rounded-2xl bg-blue700 text-white border border-did/10 gap-1">
                                <span className="text-base font-semibold">
                                    جمع نهایی:
                                </span>
                                <span className="text-base font-semibold">
                                    {Number(
                                        user?.basket.final_price ||
                                            user?.basket.price
                                    ).toLocaleString("fa")}{" "}
                                    تومان
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-8 lg:col-span-3">
                        <SelectPayment />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;
