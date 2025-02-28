"use client";
import EducationSlider from "@/app/components/landing/education/EducationSlider";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const EducationTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: "همه", content: <EducationSlider /> },
        { id: 1, label: "نظام مهندسی", content: "" },
        { id: 2, label: "کارشناسی رسمی", content: "" },
        { id: 3, label: "نرم افزارهای عمرانی", content: "" },
        { id: 4, label: "فنی ومهندسی", content: "" },
    ];

    return (
        <div className="p-4">
            <div className="flex items-center justify-center gap-16 mb-6">
                <span className="text-2xl text-dark font-bold ">
                    دوره‌های آموزشی دید عمران
                </span>
                <Link
                    href="/courses"
                    className="text-white bg-did rounded-2xl text-sm px-6 py-2 "
                >
                    مشاهده همه
                </Link>
            </div>

            {/* Tab Buttons (Horizontal) */}
            <div className="flex lg:items-center justify-center lg:flex-row flex-col">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-4 py-2 text-sm lg:text-base ${
                            activeTab === tab.id
                                ? "text-did font-semibold bg-did/15 lg:bg-transparent rounded-e-lg"
                                : "text-secondary hover:text-did transition-colors duration-200"
                        } focus:outline-none`}
                    >
                        {tab.label}
                        {/* Active Tab Indicator (Vertical Line) */}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-10 w-1 bg-did rounded"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">{tabs[activeTab].content}</div>
        </div>
    );
};

export default EducationTabs;
