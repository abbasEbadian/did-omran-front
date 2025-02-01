"use client";

import React from "react";
import TestsBox from "../components/tests/TestsBox";
import { getExams } from "@/api";
import useSWR from 'swr'
import { ExamType } from "@/api/types";

function page() {
    const {
        data,
        error,
        isLoading,
    } = useSWR<{result: string, data: ExamType[]}>("get-exams", getExams);
    console.log(data);
    
    return (
        <div className="bg-white100">
            <div className="container mx-auto">
                <span className="text-dark text-xl font-semibold text-center block pt-8 pb-2">
                    آزمون ها{" "}
                </span>
                <p className="text-secondary text-sm block text-center mb-9">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد
                </p>
                <div className="grid grid-cols-4 gap-4">
                    {data?.data?.map((exam) => {
                        return <TestsBox key={exam.id} {...exam} />;
                    })}
                    <div className="lg:col-span-1 col-span-4"></div>
                </div>
            </div>
        </div>
    );
}

export default page;
