"use client";

import React from "react";
import Events from "../../Events";
import useSWR from "swr";
import { getEvents } from "@/api/event";
import { EventType } from "@/api/event/types";

function UpcomingEvent() {
    const { data: events } = useSWR<EventType[]>("get-events", getEvents);
    return (
        <>
            <div className="flex flex-col items-center max-h-60 min-h-60 px-3 lg:px-0">
                <div className="  py-2  z-10 text-lg font-bold px-4">
                    <span className="text-gray-700 text-center">
                        رویداد های پیش رو
                    </span>
                </div>
                <div className="flex flex-col overflow-y-scroll w-full "style={{scrollbarWidth: "none"}}>
                    {events?.map((event) => {
                        return <Events event={event} key={event.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default UpcomingEvent;
