"use client";
import EducationSlider from "@/app/components/landing/education/EducationSlider";
import Link from "next/link";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { CourseType } from "@/api/course/types";
import { getCourses } from "@/api";

const grouped = (data: CourseType[]): Record<string, CourseType[]> => {
    return data.reduce((acc, item) => {
        const key = item.category.name;
        (acc[key] ??= []).push(item);
        return acc;
    }, {} as Record<string, CourseType[]>);
};

const EducationTabs = () => {
    const [activeTab, setActiveTab] = useState<string>("all");
    const {
        data: courses,
        isLoading,
        error,
    } = useSWR<CourseType[]>("get-courses", () => getCourses());

    const tabs = useMemo(() => {
        if (!courses) return [];
        return grouped(courses);
    }, [courses]);

    const items = useMemo(() => {
        if (activeTab === "all") {
            return courses;
        }

        // @ts-ignore
        return tabs[activeTab];
    }, [tabs, activeTab, courses]);

    return (
        <>
            <div className="p-4 lg:max-w-[600px] mx-auto">
                <div className="flex items-center justify-between gap-16 mb-6">
                <span className="text-lg whitespace-nowrap lg:text-2xl text-dark font-bold ">
                    دوره‌های آموزشی دید عمران
                </span>
                    <Link
                        href="/courses"
                        className="text-white bg-did rounded-2xl text-sm px-6 py-2 "
                    >
                        مشاهده همه
                    </Link>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-center justify-between mb-10">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`relative px-4 py-2 text-sm lg:text-base ${activeTab === "all"
                            ? "text-did font-semibold bg-did/15 lg:bg-transparent rounded-e-lg"
                            : "text-secondary hover:text-did transition-colors duration-200"
                        } focus:outline-none`}
                    >
                        همه
                        {activeTab === "all" && (
                            <div className="absolute bottom-0 left-0 right-0 h-7 w-1 bg-did rounded"></div>
                        )}
                    </button>
                    {Object.keys(tabs).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2 text-sm lg:text-base ${activeTab === tab
                                ? "text-did font-semibold bg-did/15 lg:bg-transparent rounded-e-lg"
                                : "text-secondary hover:text-did transition-colors duration-200"
                            } focus:outline-none`}
                        >
                            {tab}
                            {/* Active Tab Indicator (Vertical Line) */}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-7 w-1 bg-did rounded"></div>
                            )}
                        </button>
                    ))}
                </div>


            </div>
            {/* Tab Content */}
            {items && <div className="mt-8">
                <EducationSlider items={items}/>
            </div>}
        </>
    );
};

export default EducationTabs;
