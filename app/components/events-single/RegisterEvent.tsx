"use client";

import Image from "next/image";
import React, { useState } from "react";
import { EventType } from "@/api/event/types";
import { addToCart, getOrders } from "@/api/order";
import { toaster } from "@/utils/toaster";
import useSWR, { useSWRConfig } from "swr";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@mantine/core";
import { UserType } from "@/api/types";
import { getUser } from "@/api";

function RegisterEvent({event}: { event: EventType }) {
    const {mutate} = useSWRConfig();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {data: user} = useSWR<UserType>("get-user", getUser);
    const {data: orders, error, isLoading} = useSWR("get-orders", getOrders);

    const in_basket = user?.basket.lines.filter(q => q.event && q.event.id === event.id);
    const purchased = orders?.some(q => q.lines.find(f => f.event && f.event.id === event.id));
    const pathname = usePathname();

    const addToCard = async (id: number) => {
        if (!user) {
            router.push("/auth?next=" + pathname);
            return;
        }
        setLoading(true);
        if (in_basket || purchased) {
            toast.warning("قبلا خریداری شده است");
            return;
        }
        try {
            const response = await addToCart(id, "event");
            toaster(response);
            await mutate("get-user");
            router.refresh();
        } catch (e) {
            toast.error("خطا در اتصال");
        } finally {
            setLoading(false);
        }

    };


    return (
        <>
            <div
                className="grid grid-cols-3 gap-8 my-20 items-center bg-white lg:px-8 px-2 py-12 rounded-2xl"
                id="RegisterEvent"
            >
                <div className="lg:col-span-2 col-span-3">
                    <div className="lg:col-span-1 col-span-2 flex justify-center">
                        <Image
                            src={event.cover}
                            alt="about us Img"
                            height={261}
                            width={657}
                            className="object-cover w-full rounded-2xl max-w-[650px]"
                        />
                    </div>
                </div>
                <div className="lg:col-span-1 col-span-3">
                    <form action="">
                        <span className="text-dark text-base lg:text-start text-center block">
                            جهت شركت در وبينار لطفا فرم زير را تكميل كنيد
                        </span>
                        <div className="my-5 w-full">
                            <input
                                type="text"
                                defaultValue={user?.full_name}
                                className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                placeholder="نام و نام خانوادگي"
                            />
                        </div>
                        <div className="mb-5 w-full">
                            <input
                                defaultValue={user?.username}
                                type="text"
                                className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                placeholder="شماره همراه"
                            />
                        </div>
                        <section>
                            {event?.price > 0 ? (
                                <div className="flex flex-col lg:items-start items-center mt-4 ">
                                    <div
                                        className="flex items-center justify-between w-full lg:flex-row flex-col gap-5">
                                    <span className="text-secondary text-2xl font-bold text-nowrap">
                                        {Number(event.price).toLocaleString(
                                            "fa"
                                        )}
                                        <small className="px-2 text-base">
                                            تومان
                                        </small>
                                    </span>
                                        {
                                            !purchased ? <Button
                                                loading={loading}
                                                disabled={loading}
                                                onClick={() => addToCard(event.id)}
                                                type="submit"
                                                className="text-white bg-did rounded-2xl text-sm px-6 py-3 w-full text-center">
                                                {
                                                    in_basket ? "در سبد" : "دریافت بلیط وبینار"
                                                }
                                            </Button> : <Button>
                                                خریداری شده
                                            </Button>
                                        }
                                    </div>
                                </div>
                            ) : (
                                <Button
                                    loading={loading}
                                    disabled={loading}
                                    onClick={() => addToCard(event.id)}
                                    type="submit"
                                    className="text-white bg-did rounded-2xl text-sm px-6 py-3 w-full text-center">
                                    دریافت بلیط وبینار
                                </Button>
                            )}
                        </section>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterEvent;
