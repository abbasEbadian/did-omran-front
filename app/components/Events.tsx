import Image from "next/image";
import Link from "next/link";
import React from "react";
import {EventType} from "@/api/event/types";
import {ChevronLeftIcon} from "./icons/comp/Chevron";

function Events({event}: { event: EventType }) {
    return (
        <>
            <div className="flex items-center gap-1 bg-white rounded-2xl w-full shadow-custom-shadow mt-2 pb-1">
                {/* ستون اول: تاریخ و دکمه رزرو */}
                <div className="flex flex-col gap-1 ps-4 pb-4">
                    <div className="bg-blue700 text-white rounded-b-2xl flex flex-col items-center px-2 py-6">
                        <span className="text-2xl font-bold">
                            {new Date(event.start_date).toLocaleDateString(
                                "fa",
                                {day: "2-digit"}
                            )}
                        </span>
                        <span className="text-sm">
                            {new Date(event.start_date).toLocaleDateString(
                                "fa",
                                {month: "long"}
                            )}
                        </span>
                    </div>

                </div>

                <div className="px-2 flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                                src={"/icons/trophy.svg"}
                                alt="جایزه"
                                width={24}
                                height={24}
                            />
                        <span className="text-dark text-sm">{event.title}</span>
                    </div>
                   <div className="flex items-start">
                   <Link
                        href={"/events/" + event.id}
                        aria-label="رزرو رویداد"
                        className="border-did border text-base font-semibold text-did px-3 rounded-xl ga-3  flex items-center justify-between py-1 transition-all duration-300 hover:bg-did hover:text-white"
                    >
                        مشاهده و رزرو
                        <ChevronLeftIcon/>
                    </Link>
                   </div>
                    
                    {/* <div className="w-full lg:h-24 h-48 relative mt-4">
                        <Image
                            src={event.cover}
                            alt="تصویر رویداد"
                            fill
                            className="object-cover rounded-lg w-full"
                        />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Events;
