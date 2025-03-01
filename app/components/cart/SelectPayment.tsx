"use client";
import Image from "next/image";
import MdPayment from "@/app/components/icons/MdPayment.svg";
import CircleCheck from "@/app/components/icons/CircleCheck.svg";
import { payOrder } from "@/api/order";
import { FormButton } from "../FormButton";

function SelectPayment() {
    const pay = async (formdata: FormData) => {
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
                            src={MdPayment}
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
                <FormButton className="text-white bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center">
                    ثبت سفارش
                </FormButton>
            </form>
        </>
    );
}

export default SelectPayment;
