"use client";
import { payOrder } from "@/api/order";
import Image from "next/image";
import Checkbox from "../Checkbox";
import { FormButton } from "../FormButton";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";

function SelectPayment() {
    const [checked, setChecked] = useState(false);
    const pay = async (formdata: FormData) => {
        if (!checked) return;
        const response = await payOrder();
        if (response.result === "ok") {
            window.location.href = response.data.url;
        }
    };

    return (
        <>
            <form className="flex flex-col items-start gap-4" action={pay}>
                <span className="text-dark text-base font-semibold">
                    نهایی سازی سفارش
                </span>
                {/* انتخاب شده*/}
                <div className="flex flex-col items-start gap-4 w-full bg-white border border-did/10 py-3 px-6 rounded-2xl">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1">
                            <Image
                                src={"/zarinpal.png"}
                                alt="Zarinpal icon"
                                height={24}
                                width={24}
                                className="w-6 ml-2"
                            />

                            <span className="text-blue text-sm font-semibold">
                                زرین‌پال
                            </span>
                        </div>
                        <Image
                            src={"/icons/MdPayment.svg"}
                            alt="MdPayment icon"
                            height={24}
                            width={24}
                        />
                    </div>
                    <p className="text-secondary text-xs">
                        برای دریافت آنی دوره‌های خریداری شده مجموع مبلغ را از
                        درگاه‌های آنلاین معتبر ما واریز کنید.
                    </p>
                </div>
                <Checkbox checked={checked} onChange={setChecked}>
                    <small className="px-1">
                        <Link href="/terms" target="_blank" className="text-did">
                            قوانین
                        </Link>{" "}
                        را می‌پذیرم.
                    </small>
                </Checkbox>
                <FormButton
                    className={cn(
                        "text-white bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center",
                        !checked && "opacity-50 pointer-events-none"
                    )}
                    disabled={!checked}
                >
                    ثبت سفارش
                </FormButton>
            </form>
        </>
    );
}

export default SelectPayment;
