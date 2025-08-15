"use client";
import { useState } from "react";
import FreeEducationSlider from "./FreeEducationSlider";
import Image from "next/image";
import Link from "next/link";

const FreeEducationTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: "همه", content: <FreeEducationSlider /> },
        { id: 1, label: "نظارت اجرا", content: "" },
        { id: 2, label: "محاسبات ", content: <FreeEducationSlider /> },
        { id: 3, label: "کارشناسی رسمی", content: "" },
        { id: 4, label: "نرم افزار", content: "" },
        { id: 5, label: "فنی و مهندسی", content: "" },
    ];

    return (
        <>
            <div className="relative p-4 lg:max-w-[600px] mx-auto">
                <div className="flex items-center justify-between gap-16 mb-8">
                    <span className="text-2xl text-dark font-bold ">
                        آموزش‌های دیدعمران
                    </span>
                    <Link
                        href="/"
                        className="text-white bg-did rounded-2xl text-sm px-6 py-2 "
                    >
                        مشاهده همه{" "}
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
                {/* Tab Buttons (Horizontal) */}

                <div className="flex lg:flex-row flex-col lg:items-center justify-between mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 py-2 text-sm lg:text-base ${activeTab === tab.id
                                    ? "text-did font-semibold bg-did/15 lg:bg-transparent rounded-e-lg"
                                    : "text-secondary hover:text-did transition-colors duration-200"
                                } focus:outline-none`}
                        >
                            {tab.label}
                            {/* Active Tab Indicator (Vertical Line) */}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-7 w-1 bg-did rounded"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}

            </div>
            {tabs[activeTab].content}
        </>

    );
};

export default FreeEducationTabs;
