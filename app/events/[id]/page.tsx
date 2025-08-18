"use client";

import React from "react";
import IntroEventsSingle from "@components/events-single/IntroEventsSingle";
import IntroductionEvent from "@components/events-single/IntroductionEvent";
import Link from "next/link";
import InstructorInfo from "@components/events-single/InstructorInfo";
import SupportTeam from "@components/events-single/SupportTeam";
import ParticipantsComments from "@components/events-single/ParticipantsComments";
import RegisterEvent from "@components/events-single/RegisterEvent";
import NewComment from "@components/Comments/NewComment";
import MobileLinks from "@components/events-single/MobileLinks";
import useSWR from "swr";
import {getEvent} from "@/api/event";
import {useParams} from "next/navigation";
import {EventType} from "@/api/event/types";
import {useScrollSpy} from "@mantine/hooks";

function Page() {
    const spy = useScrollSpy({
        selector: ".spy",
        getValue: (element) => element.getAttribute("data-title") || "",
    });
    const { id } = useParams();
    const { data: event } = useSWR<EventType>("get-event", () =>
        getEvent(Number(id) ?? 0)
    );
    if (!event) {
        return null;
    }

    const headings = spy.data.map((heading, index) => (
        <li
            key={heading.id}
            style={{
                listStylePosition: "inside",
                paddingInlineStart: heading.depth * 20,
                background:
                    index === spy.active
                        ? "var(--mantine-color-blue-light)"
                        : undefined,
            }}
        >
            <button onClick={() => heading.getNode().scrollIntoView()}>
                {heading.value}
            </button>
        </li>
    ));

    return (
        <>
            <div className="bg-white100">
                <div className="container mx-auto">
                    <IntroEventsSingle event={event} />
                    <div className="bg-white rounded-2xl lg:px-16 py-4 lg:flex items-center justify-between shadow-custom-shadow my-14 hidden sticky top-[76px]">
                        <Link
                            href="#IntroductionEvent"
                            className="text-dark text-sm"
                        >
                            آشنایی یا رویداد
                        </Link>
                        <Link
                            href="#InstructorInfo"
                            className="text-dark text-sm"
                        >
                            {" "}
                            اطلاعات مدرس
                        </Link>
                        <Link href="#SupportTeam" className="text-dark text-sm">
                            {" "}
                            پشتیبانی و پاسخگویی
                        </Link>
                        <Link
                            href="#RegisterEvent"
                            className="text-dark text-sm"
                        >
                            ثبت نام در وبینار{" "}
                        </Link>
                        <Link href="#NewComment" className="text-dark text-sm">
                            دیدگاه{" "}
                        </Link>
                        <Link
                            href="#ParticipantsComments"
                            className="text-dark text-sm"
                        >
                            دیدگاه ها
                        </Link>
                    </div>
                    <MobileLinks />

                    <section
                        id="IntroductionEvent"
                        className="spy"
                        data-title="آشنایی یا رویداد"
                    >
                        <IntroductionEvent text={event.description} />
                    </section>

                    <section
                        id="InstructorInfo"
                        className="spy"
                        data-title="اطلاعات مدرس"
                    >
                        <InstructorInfo instructor={event.tutor} />
                    </section>

                    <section
                        id="SupportTeam"
                        className="spy"
                        data-title="پشتیبانی و پاسخگویی"
                    >
                        <SupportTeam />
                    </section>

                    <section
                        id="RegisterEvent"
                        className="spy"
                        data-title="ثبت نام در وبینار"
                    >
                        <RegisterEvent event={event} />
                    </section>

                    <section id="NewComment" className="spy" data-title="">
                        <NewComment />
                    </section>

                    <section
                        id="ParticipantsComments"
                        className="spy"
                        data-title=""
                    >
                        <ParticipantsComments />
                    </section>
                </div>
            </div>
        </>
    );
}

export default Page;
