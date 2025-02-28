"use client";

import Image from "next/image";
import React from "react";
import { EventType } from "@/api/event/types";

function RegisterEvent({ event }: { event: EventType }) {
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
                                className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                placeholder="نام و نام خانوادگي"
                            />
                        </div>
                        <div className="mb-5 w-full">
                            <input
                                type="text"
                                className="w-full p-4 bg-blue500 placeholder:text-did/50 placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                placeholder="شماره همراه"
                            />
                        </div>
                        {event?.price > 0 ? (
                            <div className="flex flex-col lg:items-start items-center mt-4 ">
                                <div className="flex items-center justify-between w-full lg:flex-row flex-col gap-5">
                                    <span className="text-secondary text-2xl font-bold text-nowrap">
                                        {Number(event.price).toLocaleString(
                                            "fa"
                                        )}
                                        <small className="px-2 text-base">
                                            تومان
                                        </small>
                                    </span>
                                    <button className="text-white bg-did rounded-2xl text-sm px-6 py-3 w-full text-center">
                                        دریافت بلیط وبینار
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="w-full bg-did text-white p-4 rounded-2xl text-xs"
                            >
                                ثبت نام در وبینار
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterEvent;
