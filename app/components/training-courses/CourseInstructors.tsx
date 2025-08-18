import Image from "next/image";
import React from "react";
import Instructor from "@/app/components/Instructor";
import { CourseType } from "@/api/types";
import Link from "next/link";

function CourseInstructors(course: CourseType) {
    return (
        <>
            <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-5">
                <span className="text-dark text-xl font-bold">مدرسین دوره</span>
                {course.tutors?.map((instructor) => (
                    <div
                        className="flex lg:flex-row flex-col items-center gap-4 bg-did/5 rounded-2xl px-8 py-4"
                        key={instructor.id}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-full">
                                <Image
                                    src={instructor.user.avatar ?? '/img/profile.png'}
                                    alt="Profile icone"
                                    height={100}
                                    width={100}
                                    className="w-24 h-24 rounded-full"
                                />
                            </div>
                            <span className="text-dark text-xl font-bold whitespace-nowrap">
                                {instructor.name}
                            </span>
                            <span className="text-secondary text-xs whitespace-nowrap">
                                {instructor.title}
                            </span>
                            <div className="flex items-center justify-end gap-4 mt-4">
                                {instructor.linkedin && <Link
                                    href={instructor.linkedin}
                                    className="text-dark text-sm"
                                >
                                    <Image
                                        src={"/icons/FaLinkedinIn.svg"}
                                        alt="FaLinkedinIn icone"
                                        height={24}
                                        width={24}
                                    />
                                </Link>}
                                {instructor.instagram && <Link
                                    href={instructor.instagram}
                                    className="text-dark text-sm"
                                >
                                    <Image
                                        src={"/icons/FaInstagram.svg"}
                                        alt="FaInstagram icone"
                                        height={24}
                                        width={24}
                                    />
                                </Link>}
                                {instructor.telegram && <Link
                                    href={instructor.telegram}
                                    className="text-dark text-sm"
                                >
                                    <Image
                                        src={"/icons/FaTelegramPlane.svg"}
                                        alt="FaTelegramPlane icone"
                                        height={24}
                                        width={24}
                                    />
                                </Link>}
                            </div>
                        </div>
                        <Instructor {...instructor} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default CourseInstructors;
