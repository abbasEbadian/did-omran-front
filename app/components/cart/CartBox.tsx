"use client";
import Image from "next/image";
import Trash2 from "@/app/components/icons/trash-2.svg";

import Price from "../price";
import { OrderLineType } from "@/api/order/types";
import { toaster } from "@/utils/toaster";
import { removeCartItem } from "@/api/order";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr/_internal";

function CartBox(line: OrderLineType) {
    const router = useRouter()
    const { mutate } = useSWRConfig()
    const removeFromCart = async (id: number) => {
        const response = await removeCartItem(id);
        toaster(response);
        mutate('get-user')
        router.refresh()
    };


    return (
        <>
            <div className="flex items-center gap-4 bg-white rounded-2xl border border-did/10 px-4 py-2 mb-4">
                <div className="">
                    <Image
                        src={line.course.cover}
                        alt="events did omran"
                        width={200}
                        height={94}
                        className="object-cover w-20"
                    />
                </div>
                <div className="flex flex-col gap-2 grow">
                    <div className="flex items-center justify-between">
                        <span className="text-did text-base font-semibold">
                            {line.course.name}
                        </span>
                        <Price amount={Number(line.course.final_price)} />
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-full">
                                <Image
                                    src={line.course.tutors[0].user.avatar}
                                    alt="Profile icone"
                                    height={65}
                                    width={65}
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-dark text-sm font-bold whitespace-nowrap">
                                    {line.course.tutors[0].name}
                                </span>
                                <span className="text-secondary text-xs whitespace-nowrap">
                                    {line.course.tutors[0].title}
                                </span>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(line.course.id)}>
                            <Image
                                src={Trash2}
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
