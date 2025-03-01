"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TitleTrainingCourses from "@/app/components/training-courses/TitleTrainingCourses";
import ContentCourse from "@/app/components/training-courses/ContentCourse";
import RequirementsCourse from "@/app/components/training-courses/RequirementsCourse";
import CourseInstructors from "@/app/components/training-courses/CourseInstructors";
import NewComment from "@/app/components/Comments/NewComment";
import CommentsChats from "@/app/components/Comments/CommentsChats";
import InformationCourse from "@/app/components/training-courses/InformationCourse ";
import SocialMedia from "@/app/components/training-courses/SocialMedia";
import PreviewCourse from "@/app/components/training-courses/PreviewCourse";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getCourse } from "@/api";
import { CourseType } from "@/api/types";

function Page() {
    const { id } = useParams();

    const { data: course, isLoading } = useSWR<CourseType>(
        `get-course${id}`,
        () => getCourse(Number(id))
    );

    return (
        <div className="bg-white100">
            <div className="grid grid-cols-12 container mx-auto gap-8">
                {/* Left Column (Main Content) */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex flex-col gap-8 mt-28">
                        {/* Course Title */}
                        {course && <TitleTrainingCourses {...course} />}

                        {/* Navigation Links */}
                        <div className="bg-white rounded-2xl px-16 py-4 flex items-center justify-between shadow-custom-shadow">
                            <Link
                                href="#Description"
                                className="text-dark text-sm hover:text-did transition-colors"
                            >
                                توضیحات
                            </Link>
                            <Link
                                href="#CourseContent"
                                className="text-dark text-sm hover:text-did transition-colors"
                            >
                                محتوای دوره
                            </Link>
                            <Link
                                href="#Requirements"
                                className="text-dark text-sm hover:text-did transition-colors"
                            >
                                جزییات و ملزومات
                            </Link>
                            <Link
                                href="#CourseInstructors"
                                className="text-dark text-sm hover:text-did transition-colors"
                            >
                                مدرسین
                            </Link>
                            <Link
                                href="#NewComment"
                                className="text-dark text-sm hover:text-did transition-colors"
                            >
                                نظرات
                            </Link>
                        </div>

                        {/* Description Section */}
                        <div
                            className="flex flex-col items-start gap-4 bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow"
                            id="Description"
                            dangerouslySetInnerHTML={{
                                __html: course?.description || "",
                            }}
                        ></div>

                        {/* Course Content Section */}
                        <div id="CourseContent">
                            {course && <ContentCourse {...course} />}
                        </div>

                        {/* Requirements Section */}
                        <div id="Requirements">
                            {course && <RequirementsCourse {...course} />}
                        </div>

                        {/* Instructors Section */}
                        <div id="CourseInstructors">
                            {course && <CourseInstructors {...course} />}
                        </div>

                        {/* Comments Section */}
                        <div id="NewComment">
                            <NewComment />
                            <CommentsChats />
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="col-span-12 lg:col-span-4">
                    {course && <InformationCourse {...course} />}
                    {course && <PreviewCourse {...course} />}
                    {/* <Events event={} /> */}
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
}

export default Page;
