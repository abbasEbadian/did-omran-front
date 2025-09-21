"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { EducationType } from "@/api/education/types";
import { getEducations } from "@/api";
import FreeEducationSlider from "@components/landing/free-education/FreeEducationSlider";

const grouped = (data: EducationType[]): Record<string, EducationType[]> => {
    return data.reduce((acc, item) => {
        const key = item.category.name;
        (acc[key] ??= []).push(item);
        return acc;
    }, {} as Record<string, EducationType[]>);
};

const FreeEducationTabs = () => {
    const [activeTab, setActiveTab] = useState<string>("all");

    const {data: educations, isLoading, error} = useSWR<EducationType[]>(
        "get-educations",
        getEducations
    );

    const tabs = useMemo(() => {
        if (!educations) return [];
        return grouped(educations);
    }, [educations]);

    const items = useMemo(() => {
        if (activeTab === "all") {
            return educations;
        }

        // @ts-ignore
        return tabs[activeTab];
    }, [tabs, activeTab, educations]);

    return (
        <>
            <div className="relative p-4 lg:max-w-[600px] mx-auto">
                <div className="flex items-center justify-between gap-16 mb-8">
                    <span className="whitespace-nowrap text-lg lg:text-2xl text-dark font-bold ">
                        آموزش‌های رایگان دیدعمران
                    </span>
                    <Link
                        href="/free-educations"
                        className="text-white bg-did rounded-2xl text-sm px-6 py-2 whitespace-nowrap"
                    >
                        مشاهده همه
                    </Link>
                </div>

                <div className="absolute right-1/3 bottom-72 -z-10">
                    <Image
                        src={"/img/freebg.png"}
                        alt="FreeBg Animation"
                        height={394}
                        width={682}
                        quality={100}
                        priority
                    />
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
            {items && <FreeEducationSlider items={items}/>}
        </>

    );
};

export default FreeEducationTabs;
