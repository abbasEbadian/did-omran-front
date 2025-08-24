"use client";

import Image from "next/image";
import Counter from "../Counter";
import Link from "next/link";
import ShareBox from "../ShareBox";
import CopyLink from "../CopyLink";
import { EventType } from "@/api/event/types";

function IntroEventsSingle({ event }: { event: EventType }) {
    return (
        <>
            <div className="grid grid-cols-8 items-center py-4 lg:px-0 px-4">
                <div className="lg:col-span-4 col-span-8 max-h-full">
                    <Image
                        src={event.cover}
                        alt="Events Img"
                        height={1200}
                        width={1500}
                        className="object-contain rounded-2xl"
                    />
                </div>
                <div className="lg:col-span-4 col-span-8 h-full">
                    <div className="flex items-center flex-col gap-6">
                        <span className="text-dark lg:text-xl mb-4 lgl:mt-0 mt-4">
                            {event.title}
                        </span>
                        <div className="flex flex-row items-center lg:gap-5 gap-0 w-full px-2 justify-between lg:justify-center">
                            <div className="flex flex-col lg:items-start items-center gap-2 lg:border-e-2 lg:border-dashed lg:border-secondary700 lg:pe-8">
                                <EventTime
                                    start_date={event.start_date}
                                    title="تاریخ برگزاری"
                                />
                            </div>
                            <div className="flex flex-col lg:items-start gap-2 lg:ps-8 ps-0">
                                <EventTime
                                    start_date={event.start_date}
                                    title="تاریخ اتمام"
                                    duration={event.duration}
                                />
                            </div>
                        </div>
                        {event.price === 0 && (
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/icons/FcInfo.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-accent text-base">
                                    شرکت در این وبینار رایگان میباشد.{" "}
                                </span>
                            </div>
                        )}
                        <div className="flex lg:flex-row flex-col lg:items-center items-start bg-secondary600 px-4 gap-2 lg:gap-12 py-1 rounded-2xl justify-between">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/icons/FaUsers.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary900 text-xs">
                                    ظرفیت باقی مانده:{" "}
                                </span>
                                <span className="text-dark text-xs">
                                    {event.capacity - event.enrolls} نفر
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/icons/location-1.svg"}
                                    alt="CheckSmall icone"
                                    height={24}
                                    width={24}
                                />
                                <span className="text-secondary900 text-xs">
                                    محل برگزاری:{" "}
                                </span>
                                <span className="text-dark text-xs">
                                    {event.location}
                                </span>
                                <Image
                                    src={event.location_icon}
                                    alt="CheckSmall icone"
                                    height={34}
                                    width={34}
                                />
                            </div>
                        </div>
                        <Counter date={event.register_end} />
                    </div>
                </div>
                <div className="lg:col-span-4 col-span-8">
                    <div className="flex items-center justify-between my-3 lg:flex-row flex-col gap-3 w-full">
                        <ShareBox />
                        <CopyLink id={event.id} code={"events"}/>
                    </div>
                </div>
                <div className="lg:col-span-4 col-span-8">
                    <Link
                        href="#RegisterEvent"
                        className="text-white bg-did rounded-2xl text-sm px-8 py-3 lg:w-1/2 w-full text-center mx-auto block"
                    >
                        ثبت نام در وبینار
                    </Link>
                </div>
            </div>
        </>
    );
}

export default IntroEventsSingle;

const EventTime = ({
    start_date,
    title,
    duration = 0,
}: {
    start_date: number;
    title: string;
    duration?: number;
}) => {
    return (
        <div className="flex flex-col lg:items-start gap-2 lg:ps-8 ps-0">
            <span className="text-dark text-sm">{title}</span>
            <div className="flex justify-around items-center gap-2">
                <div className="bg-did700 flex flex-col rounded-2xl items-center py-1 px-5 gap-1">
                    <span className="text-dark text-xl font-bold">
                        {new Date(start_date).toLocaleDateString("fa", {
                            day: "2-digit",
                        })}
                    </span>
                    <span className="text-dark text-base">
                        {new Date(start_date).toLocaleDateString("fa", {
                            month: "long",
                        })}
                    </span>
                    <span className="text-dark text-base">
                        {new Date(start_date).toLocaleDateString("fa", {
                            year: "numeric",
                        })}
                    </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/icons/calendar-check.svg"}
                            alt="CheckSmall icone"
                            height={24}
                            width={24}
                        />
                        <span className="text-secondary900 text-xs">
                            {new Date(start_date).toLocaleDateString("fa", {
                                weekday: "long",
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/icons/IoTimeOutline.svg"}
                            alt="CheckSmall icone"
                            height={24}
                            width={24}
                        />
                        <span className="text-secondary900 text-xs">
                            ساعت{" "}
                            {new Date(
                                start_date + duration * 60 * 1000
                            ).toLocaleTimeString("fa", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
