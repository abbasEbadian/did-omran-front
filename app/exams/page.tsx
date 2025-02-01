"use client";

import React, { useEffect, useReducer, useState } from "react";
import TestsBox from "../components/tests/TestsBox";
import { getExams } from "@/api";
import useSWR from "swr";
import { ExamType } from "@/api/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { cn } from "@/utils/cn";

function page() {
    const { data, error, isLoading } = useSWR<{
        result: string;
        data: ExamType[];
    }>("get-exams", getExams);

    const [categories, setCategories] = useState<
        { id: number; name: string }[]
    >([]);
    const [activeCategory, setActiveCategory] = useState<{
        id: number;
        name: string;
    }>({ id: 9999, name: "همه" });
    const [exams, setExams] = useState<ExamType[]>([]);

    useEffect(() => {
        const cats: { id: number; name: string }[] = [];
        for (let item of data?.data || []) {
            if (!cats.find((q) => q.name === item.category.name))
                cats.push(item.category);
        }
        setCategories(
            Array.from(
                new Set([
                    { id: 9999, name: "همه" },
                    ...cats,
                ])
            )
        );
        setExams(data?.data ?? []);
    }, [data]);

    useEffect(() => {
        if (activeCategory.id === 9999) {
            setExams(data?.data || []);
        } else {
            setExams(
                data?.data.filter((q) => q.category.id === activeCategory.id) ||
                    []
            );
        }
    }, [activeCategory]);

    return (
        <div className="bg-white100 h-screen">
            <div className="container mx-auto">
                <span className="text-dark text-xl font-semibold text-center block pt-8 pb-2">
                    آزمون ها
                </span>
                <p className="text-secondary text-sm block text-center mb-9">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد
                </p>
                <div className="flex gap-6 items-end justify-center border-b border-did/10 mb-8">
                    {categories?.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveCategory(tab)}
                            className={`px-6 py-2 rounded-t-2xl transition-all duration-300 min-w-40 ${
                                activeCategory.id === tab.id
                                    ? "bg-did/25 text-did h-14"
                                    : "bg-did/10 text-did/40 "
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {isLoading &&
                        Array.from({ length: 4 }).map((q, i) => {
                            return (
                                <SkeletonTheme
                                    key={i}
                                    baseColor="#ddd"
                                    highlightColor="#aaa"
                                >
                                    <p>
                                        <Skeleton height={247} />
                                        <Skeleton height={50} />
                                        <Skeleton height={70} />
                                    </p>
                                </SkeletonTheme>
                            );
                        })}
                </div>
                <div
                    className={cn(
                        "grid grid-cols-4 gap-4 transition-[1]",
                        isLoading ? "opacity-0" : "opacity-1"
                    )}
                >
                    {exams?.map((exam) => {
                        return <TestsBox key={exam.id} {...exam} />;
                    })}
                    {!isLoading && exams?.length === 0 && (
                        <h5 className="text-dark text-center w-full">
                            آزمونی یافت نشد
                        </h5>
                    )}
                    <div className="lg:col-span-1 col-span-4"></div>
                </div>
            </div>
        </div>
    );
}

export default page;
