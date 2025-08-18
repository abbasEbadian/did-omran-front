"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {CourseType} from "@/api/types";

interface Session {
    title: string;
    duration: string;
    description?: string;
    file?: string;
}

function ContentCourse(course: CourseType) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    let sessions: Session[] = course.topics?.map(t => ({
        title: t.name,
        duration: `${Math.floor(t.duration / 60)} ساعت و ${t.duration % 60} دقیقه`,
        description: t.title,
    }));

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-4">
            {/* عنوان دوره */}
            <div className="flex items-center justify-start gap-1">
                <span className="text-xl font-black text-dark">محتوا و سرفصل‌های</span>
                <span className="text-xl font-black text-did">
          دوره جامع ایلاستریتور (مقدماتی ، پیشرفته و استادی)
        </span>
            </div>

            {sessions?.map((session, index) => (
                <div
                    key={index}
                    className={`${
                        openIndex === index ? "bg-secondary600" : "bg-did/15"
                    } rounded-2xl py-3 px-4 flex flex-col gap-2 transition-all duration-300`}
                >
                    <div
                        className="flex items-center justify-between mb-1 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-dark text-base">{session.title}</span>
                        <div className="flex gap-1 items-center px-2 bg-blue/15">
                            <Image src={"/icons/clock.svg'"} alt="Clock icon" height={24} width={24}/>
                            <span className="text-secondary text-xs">{session.duration}</span>
                        </div>
                    </div>

                    {openIndex === index && (
                        <>
                            <div className="flex gap-1 items-center border-dashed border-b-2 border-secondary700 pb-3">
                                <Image src={"/icons/IoPlayOutline.svg"} alt="Play icon" height={24} width={24}/>
                                <span className="text-secondary text-sm">{session.description}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src={"/icons/BsFileEarmarkArrowDown.svg"}
                                        alt="File download icon"
                                        height={24}
                                        width={24}
                                    />
                                    <span className="text-secondary text-sm">{session.file}</span>
                                </div>
                                <div className="mt-2 ms-auto">
                                    <Link
                                        href="#"
                                        className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center"
                                    >
                                        <Image src={"/icons/download.svg'"} alt="Download icon" width={24} height={24}/>
                                        لینک دانلود
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ContentCourse;