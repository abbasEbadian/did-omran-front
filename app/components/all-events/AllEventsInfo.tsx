import Image from "next/image";
import Link from "next/link";
import {EventType} from "@/api/event/types";
import React from "react";

type Props = {
    events: EventType[];
};

const AllEventsInfo = ({ events }: Props)  =>{
    return (
        <>
            <div className="container mx-auto my-16 flex flex-col gap-4">
                {events ? (
                    events.map((event) => {
                        return (
                            <div key={event.id}
                                 className=" mx-5 lg:mx-0 bg-did700 rounded-2xl lg:pe-4 py-5 lg:ps-12 px-2 flex flex-col items-starts justify-end gap-2 relative hover:bg-blue400 hover:transition-[0.2] hover:shadow-custom-shadow">
                                <div
                                    className="lg:absolute lg:top-[15%] lg:-right-9 shadow-custom-shadow bg-white rounded-full p-4 mx-auto flex">
                                    <Image
                                        src={"/icons/check.svg"}
                                        alt="eye icone"
                                        height={34}
                                        width={34}
                                    />
                                </div>
                                <span className="text-dark text-sm font-semibold">
                                    {event.title}
                                </span>
                                <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
                                    <EventDate timestamp={event.start_date} />
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src={"/icons/FaChalkboardTeacher.svg"}
                                            alt="CheckSmall icone"
                                            height={24}
                                            width={24}
                                        />
                                        <span className="text-dark text-sm">
                                            توسط:
                                        </span>
                                        <span className="text-blue text-sm font-black">
                                            {event.tutor.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src={"/icons/users-more.svg"}
                                            alt="CheckSmall icone"
                                            height={24}
                                            width={24}
                                        />
                                        <span className="text-dark text-sm">
                                            {event.enrolls || 26}
                                        </span>
                                        <span className="text-blue text-sm font-black">
                                            نفر
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src={"/icons/IoTimeOutline.svg"}
                                            alt="CheckSmall icone"
                                            height={24}
                                            width={24}
                                        />
                                        <span className="text-dark text-sm">
                                            مدت زمان:
                                        </span>
                                        <span className="text-blue text-sm font-black">
                                            {event.duration}دقیقه{" "}
                                        </span>
                                    </div>
                                    <Link
                                        href={"events/" + event.id}
                                        className="text-white bg-blue700 rounded-2xl text-sm px-8 py-2 flex gap-1 items-center"
                                    >
                                        مشاهده رویداد
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>رویدادی ثبت نشده است</div>
                )}
            </div>
        </>
    );
}

export default AllEventsInfo;

export const EventDate = React.memo(({ timestamp }: { timestamp: number }) => {
    const date = new Date(timestamp);
    return (
        <span className="flex gap-1 items-center">
            <b className="text-blue text-xl">
                {date.toLocaleDateString("fa", {
                    day: "2-digit",
                })}
            </b>
            <span className="text-blue text-sm font-medium" dir="ltr">
                {date.toLocaleDateString("fa", {
                    "year": "numeric",
                    "month": "long"
                })}
            </span>
        </span>
    );
});
