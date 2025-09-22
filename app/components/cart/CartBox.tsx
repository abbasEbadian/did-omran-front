"use client";
import Image from "next/image";

import Price from "../price";
import { OrderLineType } from "@/api/order/types";
import { toaster } from "@/utils/toaster";
import { removeCartItem } from "@/api/order";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr/_internal";
import { useEffect, useState } from "react";
import { CoverPlaceholder } from "@/utils/consts";

function CartBox(line: OrderLineType) {
    const router = useRouter();
    const {mutate} = useSWRConfig();
    const [data, setData] = useState({
        price: 0,
        name: "",
        image: "",
        tutorAvatar: "",
        tutorName: "",
        tutorTitle: "",
    });

    const removeFromCart = async () => {
        const line_type = line.course ? "course" : "event";
        const line_id = line_type === "course" ? line.course.id : line.event.id;
        const response = await removeCartItem(line_id, line_type);
        toaster(response);
        await mutate("get-user");
        router.refresh();
    };

    useEffect(() => {
        if (line.course) {
            setData({
                name: line.course.name,
                image: line.course.cover,
                price: line.course.final_price,
                tutorAvatar: line.course.tutors[0].user.avatar,
                tutorName: line.course.tutors[0].name,
                tutorTitle: line.course.tutors[0].title,
            });
        } else {
            setData({
                name: line.event.title,
                image: line.event.cover,
                price: line.event.price,
                tutorAvatar: line.event.tutor.user.avatar,
                tutorName: line.event.tutor.name,
                tutorTitle: line.event.tutor.title,
            });
        }
    }, [line]);
    return (
        <>
            <div className="flex items-center gap-4 bg-white rounded-2xl border border-did/10 px-4 py-2 mb-4">
                <div className="">
                    <Image
                        src={data.image || CoverPlaceholder}
                        alt="events did omran"
                        width={200}
                        height={94}
                        className="object-cover w-20"
                    />
                </div>
                <div className="flex flex-col gap-2 grow">
                    <div className="flex items-center justify-between">
                        <span className="text-did text-base font-semibold">
                            {data.name}
                        </span>
                        <Price amount={Number(data.price)}/>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-full">
                                <Image
                                    src={data.tutorAvatar || "/tutor-avatar.svg"}
                                    alt="Profile icone"
                                    height={65}
                                    width={65}
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-dark text-sm font-bold whitespace-nowrap">
                                    {data.tutorName}
                                </span>
                                <span className="text-secondary text-xs whitespace-nowrap">
                                    {data.tutorTitle}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart()}>
                            <Image
                                src={"/icons/trash-2.svg"}
                                alt="trash icone"
                                height={24}
                                width={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartBox;
