"use client";

import Image from "next/image";
import React from "react";
import BsBook from "@/app/components/icons/BsBook.svg";
import MdAccessTime from "@/app/components/icons/MdAccessTime.svg";
import Score from "../../Score";
import { CourseType, UserType } from "@/api/types";
import { toaster } from "@/utils/toaster";
import { addToCart } from "@/api/order";
import { FormButton } from "../../FormButton";
import { useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import { getUser } from "@/api";
import { revalidateTag } from "next/cache";

function EducationItems(course: CourseType) {
    const router = useRouter();
    const { mutate } = useSWRConfig()

    const addToCard = async (id: number) => {
        const response = await addToCart(id);
        toaster(response)
        mutate('get-user')
        router.refresh()
    };

    const { data: user, error, isLoading } = useSWR<UserType>('get-user', getUser)
    return (
        <>
            <div className="flex flex-col shadow-custom-shadow border border-did/15 rounded-2xl   container mx-auto">

                <div className="">
                    <Image
                        src={course.banner}
                        alt="Consultation Img"
                        height={800}
                        width={1200}
                        className="w-full max-h-[270px] object-cover"
                    />
                </div>
                <div className="flex flex-col bg-white rounded-b-2xl  gap-2 px-4 py-6">
                    <div className=" flex flex-col items-start gap-2 justify-start mb-4">
                        <span className="text-dark text-base font-medium">
                            {course.name}
                        </span>
                        <span className="text-xs text-secondary">
                            {course.title}
                        </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={BsBook}
                                    alt="Consultation Img"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-blue800">
                                    {course?.topics?.length} جلسه
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={MdAccessTime}
                                    alt="Consultation Img"
                                    width={20}
                                    height={24}
                                />
                                <span className="text-blue800">
                                    {Math.ceil(
                                        course?.topics
                                            ?.map((topic) => topic.duration)
                                            .reduce((a, b) => a + b, 0) / 60
                                    )}{" "}
                                    ساعت
                                </span>
                            </div>
                        </div>
                        <Score rating={3} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-dark text-xl">
                                {Number(course.final_price).toLocaleString(
                                    "fa"
                                )}
                            </span>
                            <span className="text-dark text-base"> تومان</span>
                        </div>
                        {user?.basket.lines.find(q => q.course.id === course.id) ? <FormButton disabled
                            className="text-white bg-did text-sm py-3 px-8 rounded-2xl hover:bg-did/80 transition-all "
                        >
                            در سبد
                        </FormButton> : <FormButton 
                            onClick={(_) => addToCard(course.id)}
                            className="text-white bg-did text-sm py-3 px-8 rounded-2xl hover:bg-did/80 transition-all "
                        >
                            سبد خرید
                        </FormButton>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationItems;
