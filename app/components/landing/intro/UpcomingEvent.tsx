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
            <div className="bg-secondary700 rounded-2xl px-2 pb-4 mt-10 flex flex-col items-center max-h-60 min-h-6 max-h-60">
                <div className="bg-blue700  py-2 rounded-2xl  z-10 text-lg font-bold -mt-8 border-white border-2 inline-table px-4">
                    <span className="text-white text-center">
                        وبینارهای پیش رو
                    </span>
                </div>
                <div className="flex flex-col overflow-auto w-full ">
                    {events?.map((event) => {
                        return <Events event={event} key={event.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default UpcomingEvent;
