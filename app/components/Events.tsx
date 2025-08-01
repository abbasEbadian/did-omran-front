import Image from "next/image";
import Link from "next/link";
import React from "react";
import Trophy from "@/app/components/icons/trophy.svg";
import { EventType } from "@/api/event/types";
import { ChevronLeftIcon } from "./icons/comp/Chevron";

function Events({ event }: { event: EventType }) {
    return (
        <>
            <div className="flex items-center gap-1 bg-white rounded-2xl w-full shadow-lg mt-2 pb-1">
                {/* ستون اول: تاریخ و دکمه رزرو */}
                <div className="flex flex-col gap-1 ps-4 pb-4">
                    <div className="bg-blue700 text-white rounded-b-2xl flex flex-col items-center px-2 py-6">
                        <span className="text-2xl font-bold">
                            {new Date(event.start_date).toLocaleDateString(
                                "fa",
                                { day: "2-digit" }
                            )}
                        </span>
                        <span className="text-sm">
                            {new Date(event.start_date).toLocaleDateString(
                                "fa",
                                { month: "long" }
                            )}
                        </span>
                    </div>
                    <Link
                        href={"/events/" + event.id}
                        aria-label="رزرو رویداد"
                        className="bg-secondary800 text-xs text-white px-2 rounded flex items-center justify-between py-1 hover:bg-secondary900 transition-all duration-300"
                    >
                        رزرو
                        <ChevronLeftIcon />
                        {/* <Image
                            src={ChevronLeft}
                            alt="رزرو"
                            width={12}
                            height={12}
                            className="text-white fill-white"
                        /> */}
                    </Link>
                </div>

                <div className="px-2">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="text-dark text-xs">{event.title}</span>
                        <Image
                            src={Trophy}
                            alt="جایزه"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="w-full h-24 relative mt-4">
                        <Image
                            src={event.cover}
                            alt="تصویر رویداد"
                            fill
                            className="object-cover rounded-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
